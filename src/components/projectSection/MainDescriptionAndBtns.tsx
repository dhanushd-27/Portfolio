import PrimaryBtn from "../PrimaryBtn"
import SecondaryBtn from '../SecondaryBtn';

interface PropsType {
  Date: string,
  Name: string,
  Description: string,
  LiveLink: string,
  GithubLink: string
}

export default function MainDescriptionAndBtns({ Date, Name, Description, LiveLink, GithubLink }: PropsType) {
  return (
    <div className="flex flex-col gap-8 justify-start items-center">
      <div className="w-[364px] flex flex-wrap flex-col gap-2 justify-start items-center">
        <h6 className="w-full text-h6/h6 tracking-h6">{ Date }</h6>
        <h4 className="w-full text-h4/h4">{ Name }</h4>
        <h6 className="w-full h-[88px] text-wrap text-h6/h6 tracking-h6">{ Description }</h6>
      </div>

      <div className="flex gap-4">
        <PrimaryBtn BtnName="Live" link={ LiveLink }/>
        <SecondaryBtn BtnName="Github" link={ GithubLink }/>
      </div>
    </div>


  )
}
