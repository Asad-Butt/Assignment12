interface PosterItemModel {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<number>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}


interface PosterModel {
    page: number;
    results: Array<PosterItemModel>;
    total_pages: number | undefined;
    total_results: number;
}