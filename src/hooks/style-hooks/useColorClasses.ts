import { MuiColors } from './../../types/mui-colors';
import { Color } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { SimplePaletteColorOptions } from '@material-ui/core/styles/createPalette';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

interface ConstructedClassesReturnType {
  hover: {
    '&:hover': CSSProperties;
  };
  hoverBgMain: {
    '&:hover': CSSProperties;
  };
  hoverBgLight: {
    '&:hover': CSSProperties;
  };
  active: CSSProperties;
  colorMain: CSSProperties;
  colorLight: CSSProperties;
  bgMain: CSSProperties;
  bgLight: CSSProperties;
  borderColorMain: CSSProperties;
  borderColorLight: CSSProperties;
}

interface ColorMap {
  main: string;
  light: string;
}

const getColor = (
  colorOptions: SimplePaletteColorOptions | Color,
  shade: keyof ColorMap
): string => {
  const isColor = (p: any): p is Color => p.hasOwnProperty('500');
  let returnedColor = '';
  if (isColor(colorOptions)) {
    if (shade === 'main') returnedColor = colorOptions[500];
    if (shade === 'light') returnedColor = colorOptions[200];
  } else {
    returnedColor = colorOptions[shade]!;
  }

  return returnedColor;
};

const constructClasses = (
  colorsMap: SimplePaletteColorOptions
): ConstructedClassesReturnType => {
  return {
    hover: {
      '&:hover': {
        color: colorsMap.main,
        backgroundColor: colorsMap.light,
      },
    },
    hoverBgMain: {
      '&:hover': {
        backgroundColor: colorsMap.main,
      },
    },
    hoverBgLight: {
      '&:hover': {
        backgroundColor: colorsMap.light,
      },
    },
    active: {
      color: colorsMap.main,
      backgroundColor: colorsMap.light,
    },
    colorMain: {
      color: colorsMap.main,
    },
    colorLight: {
      color: colorsMap.light,
    },
    bgMain: {
      backgroundColor: colorsMap.main,
    },
    bgLight: {
      backgroundColor: colorsMap.light,
    },
    borderColorMain: {
      borderColor: colorsMap.main,
    },
    borderColorLight: {
      borderColor: colorsMap.light,
    },
  };
};

const useColorClasses = (colorName: MuiColors) =>
  makeStyles((theme: Theme) => {
    const colorOptions: SimplePaletteColorOptions | Color =
      theme.palette[colorName];

    const colorMap: ColorMap = {
      main: getColor(colorOptions, 'main'),
      light: getColor(colorOptions, 'light'),
    };

    return constructClasses(colorMap);
  })();

export default useColorClasses;
