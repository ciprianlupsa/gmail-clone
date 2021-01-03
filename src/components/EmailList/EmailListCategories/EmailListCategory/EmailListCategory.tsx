import { Box } from '@material-ui/core';
import React from 'react';
import useColorClasses from '../../../../hooks/style-hooks/useColorClasses';
import EmailListCategoryItem from './EmailListCategoryItem.model';

const EmailListCategory: React.FC<EmailListCategoryItem> = ({
  title,
  Icon,
  color,
  selected,
}) => {
  const { borderColorMain, colorMain } = useColorClasses(color);
  const greyColorClasses = useColorClasses('grey');

  const CategoryClasses = [
    `${selected ? `${borderColorMain} ${colorMain}` : ''}`,
  ].join(' ');

  return (
    <Box className={greyColorClasses.hoverBgLight} px={1} minWidth="200px">
      <Box
        display="flex"
        alignItems="center"
        borderBottom={selected ? 2 : null}
        className={CategoryClasses}
        style={{ cursor: 'pointer' }}
      >
        <Box mx={1}>
          <Icon />
        </Box>
        <h4>{title}</h4>
      </Box>
    </Box>
  );
};

export default EmailListCategory;
