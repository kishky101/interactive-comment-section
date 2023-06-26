export type MockDataType = {
    id: number;
    name: string;
    comment: string;
    time: string;
    likeCount: number;
    parentId?: number;
    liked: boolean
}

const MockData = (): MockDataType[] => {

    return (
        [
            {
                id: 1,
                name: 'Ellie Alvaz',
                comment: 'What a strong song, thank you Miley for this awesome piece of self love and confidence.',
                time: '5 hr',
                likeCount: 55,
                parentId: 0,
                liked: false
            },
            {
                id: 2,
                name: 'Kylee Thomson',
                comment: 'Seen her Hannah Montana era, wrecking ball era, malibu era, and then this flower era. Grown up with her and she has my total respect for being such a strong, admirable woman. Love you Miley.',
                time: '20 min',
                likeCount: 0,
                parentId: 0,
                liked: false
            },
            {
                id: 3,
                name: 'Laurel Fisher',
                comment: 'I\'m usually not a fan of Miley Cyrus though I respect her job. And I have to recognize this song is so great : lyrics, voice, melody, rhythm, etc. I just can\'t stop listening to this one. Bravo Miley ! \n \nBy the way, I think she looks like Madonna more and more.',
                time: '55 min',
                likeCount: 99,
                parentId: 0,
                liked: false
            },
            {
                id: 4,
                name: 'Kylee Thomson',
                comment: 'Truly an unhappy bit',
                time: '6 min',
                likeCount: 1,
                parentId: 1,
                liked: false
            },
            {
                id: 5,
                name: 'Ellie Alvaz',
                comment: 'True',
                time: '3 min',
                likeCount: 0,
                parentId: 1,
                liked: false
            },
        ]
    )

}

export default MockData;