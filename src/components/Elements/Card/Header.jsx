import { CardHeader, CardTitle } from "@/components/ui/card";

const Header = ({ product }) => {
  return (
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-md font-medium">{product.name}</CardTitle>
    </CardHeader>
  );
};

export default Header;
