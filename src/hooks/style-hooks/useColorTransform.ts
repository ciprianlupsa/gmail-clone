import { Color } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { SimplePaletteColorOptions } from '@material-ui/core/styles/createPalette';

type AcceptedColors =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'grey';

interface Colors {
  color: string;
  backgroundColor?: string;
}

interface ConstructedClasses {
  []
}

const turnColors = (
  colorOptions: SimplePaletteColorOptions | Color
): Colors => {
  const isColor = (p: any): p is Color => p.hasOwnProperty('500');
  if (isColor(colorOptions))
    return {
      color: colorOptions[500],
      backgroundColor: colorOptions[200],
    };

  return {
    color: colorOptions.main,
    backgroundColor: colorOptions.light,
  };
};

const constructClasses = (colorName: AcceptedColors, colors: Colors) => {
  return {
    [colorName + 'Hover']: {
      '&:hover': {
        ...colors,
      },
    },
    [colorName + 'Active']: {
      ...colors,
    },
  };
};

const useColorTransform = (colorName: AcceptedColors): =>
  makeStyles((theme: Theme) => {
    const colorOptions: SimplePaletteColorOptions | Color =
      theme.palette[colorName];
    const colorStyleObject = turnColors(colorOptions);

    return constructClasses(colorName, colorStyleObject);
  });

export default useColorTransform;
