import { Dimensions, FlatList, Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import TextComponent from './Text';
import moment from 'moment';
interface ListRenderItemInfo<ItemT> {
    item: ItemT;
}

interface GridViewProps {
    data: Array<PosterItemModel>;
    imageUrl: String;
    poster_size: String
    onPress: (item: PosterItemModel) => void;
    onEndReached: () => void;
}

export default function GridView(props: GridViewProps) {

    /** Renderers **/

    /**
     * @return {JSX.Element}
     */
    const renderFlatListItem = (
        info: ListRenderItemInfo<PosterItemModel>
    ): JSX.Element => {
        return (
            <Pressable className="m-2 mr-0" onPress={() => props.onPress(info?.item)}>
                <Image className="rounded-xl" source={{ uri: props?.imageUrl + props?.poster_size + '/' + info?.item?.poster_path }} style={styles.poster} />
                <TextComponent style={styles.title} color='black'>{info?.item?.title}</TextComponent>
                <TextComponent style={styles.release_date} color='black'>{moment(info?.item?.release_date, 'DD-MM-YYYY').format('DD MMM YYYY')}</TextComponent>
            </Pressable>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={props.data}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                onEndReached={props?.onEndReached}
                onEndReachedThreshold={0.2}
                renderItem={renderFlatListItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    poster: {
        height: Dimensions.get('screen').height * 0.26,
        width: Dimensions.get('screen').width * 0.45
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        width: Dimensions.get('screen').width * 0.5,
        paddingTop: 10,
        paddingLeft: 5
    },
    release_date: {
        fontSize: 14,
        width: Dimensions.get('screen').width * 0.5,
        paddingVertical: 10,
        paddingLeft: 5
    }
})