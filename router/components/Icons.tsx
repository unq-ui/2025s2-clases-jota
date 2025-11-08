import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

type IconProps = {
  color: string;
};

const HomeIcon = ({ color }: IconProps) => <AntDesign name="home" size={24} color={color} />

const SearchIcon = ({ color }: IconProps) => <Feather name="search" size={24} color={color} />

const PlusSquareIcon = ({ color }: IconProps) => <Feather name="plus-square" size={24} color={color} />

const ChevronRightIcon = ({ color }: IconProps) => <Feather name="chevron-right" size={24} color={color} />

export { ChevronRightIcon, HomeIcon, PlusSquareIcon, SearchIcon };

