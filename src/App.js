import { useState } from 'react';
import './App.css';
import PhotoSliderCompare from './PhotoSliderCompare';
import Settings from './Settings';

/** Компонент PhotoCompareSlider */
export default () => {
  const [procent, setProcent] = useState(50);
  const [size, setSize] = useState(400);
  const onSettingChange = (setting, value) => {
    switch (setting.name) {
      case 'procent':
        setProcent(Number(value));
    }
  };
  return (
    <>
      <PhotoSliderCompare
        firstUrl="first.jpg"
        secondUrl="second.jpg"
        newImgProcentWidth={procent}
        size={size}
      />
      <Settings
        settings={[
          {
            name: 'procent',
            title: 'Процент новой картинки',
            type: 'number',
            value: 30
          }
        ]}
        onChange={onSettingChange}
      />
    </>
  );
};
