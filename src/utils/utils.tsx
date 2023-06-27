import { MockDataType } from "@/mock-comment-data";
export const commentCreator = (id: number, name: string, comment: string, parentId?: number): MockDataType => {
    return {
        id,
        name,
        comment,
        likeCount: 0,
        time: 60,
        timeIn: 'min',
        parentId: parentId? parentId : 0,
        liked: false
    }
}

export const timeConverter = (timeInSeconds: number) => {
    const time = timeInSeconds;
    if (time / 60 < 60) {
        return Math.trunc(time/60)
    }else if (time / 60 > 60) {
        return Math.trunc(time / 3600)
    }
}