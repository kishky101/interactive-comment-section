import { MockDataType } from "@/mock-comment-data";
export const commentCreator = (id: number, name: string, comment: string, parentId?: number): MockDataType => {
    return {
        id,
        name,
        comment,
        likeCount: 0,
        time: '1 min',
        parentId: parentId? parentId : 0,
        liked: false
    }
}