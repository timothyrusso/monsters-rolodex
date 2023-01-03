import './search-box.styles.css';
import { ChangeEvent } from 'react';

interface ISearchBoxProps {
  className: string;
  placeholder?: string;
  onChangeHandler: (a: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: ISearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
