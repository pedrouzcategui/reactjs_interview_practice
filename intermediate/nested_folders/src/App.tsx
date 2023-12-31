import "./App.css";
import { useState } from "react";
import { File as FileType } from "./types";
import { TREE } from "./consts";
import { FaHtml5, FaCss3, FaFolderOpen, FaFolder, FaFileImage, FaFileCode } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { getExtension } from "./utils";


function Icon({ extension }: { extension: String }): JSX.Element {
  switch (extension) {
    case 'html':
      return <FaHtml5 style={{ color: '#D93414' }} />
    case 'css':
      return <FaCss3 style={{ color: '#3595CF' }} />
    case 'js':
      return <IoLogoJavascript style={{ color: 'yellow', backgroundColor: 'black' }} />
    case 'png':
      return <FaFileImage style={{ color: 'teal' }} />
    case 'jpg':
      return <FaFileImage style={{ color: 'teal' }} />
    default:
      return <FaFileCode style={{ color: 'gray' }} />
  }
}

function File({ name, children }: FileType) {
  const extension = getExtension(name);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="file">
      <span onClick={() => setIsOpen(!isOpen)}>{children ? (children.length > 0 ? (isOpen ? <FaFolderOpen style={{ color: '#DED0B4' }} /> : <FaFolder style={{ color: '#DED0B4' }} />) : "") : <Icon extension={extension} />} {name}</span>
      {
        isOpen
          ? children?.map((fileProps: FileType) => <File {...fileProps} />)
          : ""
      }
    </div>
  )
}

function App() {
  return <>
    {
      TREE.map((fileProps: FileType) => {
        return <File {...fileProps} />
      })
    }
  </>;
}

export default App;
