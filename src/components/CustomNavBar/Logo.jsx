import { logoProps } from "../../constants";
const Logo = ({
  url = logoProps.default.url,
  width = logoProps.default.width,
  height = logoProps.default.height,
}) => <img src={url} width={width} height={height} />;

export default Logo;
