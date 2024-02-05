import { useEffect, useMemo, useState } from 'react';
import './App.css';

/** Компонент PhotoCompareSlider */
export default ({
  firstUrl = '',
  secondUrl = '',
  size = 400,
  newImgProcentWidth = 30,
  borderWidth = 2,
  borderTapWidth = 10
}) => {
  const getInititalNewImageBlockWidth = () => (size / 100) * newImgProcentWidth;

  const [newImgBlockWidth, setNewImgBlockWidth] = useState(
    getInititalNewImageBlockWidth()
  );
  const [borderCursor, setBorderCursor] = useState('grab');
  const [isMove, setIsMove] = useState(false);

  useEffect(() => {
    setNewImgBlockWidth(getInititalNewImageBlockWidth());
  }, [newImgProcentWidth]);

  const onPointerDown = (e) => {
    setBorderCursor('grabbing');
    setIsMove(true);
  };

  const onPointerMove = (e) => {
    const newWidth = e.clientX - 5;

    if (newWidth < size && newWidth > borderWidth && isMove) {
      console.log(newWidth);
      setNewImgBlockWidth(newWidth);
    }
  };

  const onPointerUp = (e) => {
    setBorderCursor('grab');
    setIsMove(false);
  };

  return (
    <div
      className="photoSlider"
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <img
        className="oldImg"
        draggable={false}
        src={firstUrl}
        width={size}
        height={size}
      />
      <div
        className="newImgBlock"
        style={{ width: newImgBlockWidth, height: size }}
      >
        <img
          className="newImg"
          draggable={false}
          src={secondUrl}
          width={size}
          height={size}
        />
      </div>
      <div
        className="borderWrapper"
        style={{
          width: newImgBlockWidth,
          height: size
        }}
      >
        <div
          className={`border ${borderCursor}`}
          style={{
            cursor: borderCursor,
            width: borderTapWidth,
            right: -(borderTapWidth / 2)
          }}
          onPointerDown={onPointerDown}
        >
          <div className="border__line" style={{ width: borderWidth }}></div>
          <div className="border__cursorTop"></div>
          <div className="border__cursorBottom"></div>
        </div>
      </div>
    </div>
  );
};
