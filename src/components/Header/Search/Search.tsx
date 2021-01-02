import React, { useState } from 'react';

import { Box, Tooltip, IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClearIcon from '@material-ui/icons/Clear';

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('abracadabra');
  console.log('Rendering search ');
  return (
    <Box
      display="flex"
      justifyContent="start"
      alignItems="center"
      bgcolor="#f1f3f4"
      borderRadius="borderRadius"
    >
      <Tooltip title="Search">
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <InputBase
        fullWidth
        placeholder="Search mail"
        inputProps={{ 'aria-label': 'search emails' }}
        onChange={($e) => setSearchValue($e.target.value)}
        value={searchValue}
      />

      {searchValue.length > 0 && (
        <Tooltip title="Clear">
          <IconButton onClick={() => setSearchValue('')}>
            <ClearIcon></ClearIcon>
          </IconButton>
        </Tooltip>
      )}

      <Tooltip title="Show search options">
        <IconButton>
          <ArrowDropDownIcon></ArrowDropDownIcon>
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Search;
