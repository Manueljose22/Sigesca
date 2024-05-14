import { Link } from "react-router-dom"

interface buttonProps{
    url: string;
    textButton: string;
    icon: any;
}

function ButtonLink({url, textButton, icon}: buttonProps) {
  return (
    <Link className="btn btn-primary" to={url}>{icon}  {textButton}</Link>
  )
}

export default ButtonLink