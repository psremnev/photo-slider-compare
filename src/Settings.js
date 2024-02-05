import { useState } from 'react';

/** Компонент настроек */
export default ({ settings = [], onChange }) => {
  const [settings_, setSettings_] = useState(settings);
  const onPropertyChange = (property, value) => {
    onChange && onChange(property, value);
    const newSettings = [...settings_];
    const newSettingIndex = newSettings.findIndex(
      (setting) => setting.name === property.name
    );
    newSettings[newSettingIndex].value = value;
    setSettings_(newSettings);
  };
  return (
    <div className="settings" style={{ padding: 10 }}>
      {settings_.map((property) => {
        return (
          <>
            <div className="settings__title">{property.title}</div>
            <input
              onChange={(e) =>
                onPropertyChange(property, e.currentTarget.value)
              }
              value={property.value}
              type={property.type}
              min={property.min || 0}
              max={property.max || 100}
            ></input>
          </>
        );
      })}
    </div>
  );
};
