import {useState} from "react";

export function useImageFrameMover() {
    const [offset, setOffset] = useState(0);

    // 이미지들을 좌우로 움직이게 하는 함수
    const moveFrames = (direction: string, imageArea: number) => {
        // 최대 움직일 수 있는 오프셋 값 정의
        const maxOffset = (imageArea - 1) * 200;
        const newOffset = direction === 'right' ? offset - 400 : offset + 400;

        setOffset(Math.min(Math.max(newOffset, -maxOffset), 400));
    };
    return{
        offset, moveFrames
    }
}