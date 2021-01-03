import { Color } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { SimplePaletteColorOptions } from '@material-ui/core/styles/createPalette';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

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

type ConstructedClassesReturnType = { [name: string]: CSSProperties };

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

const constructClasses = (colors: Colors): ConstructedClassesReturnType => {
  return {
    hover: {
      '&:hover': {
        ...colors,
      },
    },
    active: {
      ...colors,
    },
  };
};

const useColorTransform = (colorName: AcceptedColors) =>
  makeStyles((theme: Theme) => {
    const colorOptions: SimplePaletteColorOptions | Color =
      theme.palette[colorName];
    const colorStyleObject = turnColors(colorOptions);

    return constructClasses(colorStyleObject);
  })();

export default useColorTransform;
