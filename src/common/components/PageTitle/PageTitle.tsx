import Button from "../Button";

interface Props {
  text: string;
  onAddClick: () => void;
}

const PageTitle = ({ text, onAddClick }: Props) => (
  <div className="container flex items-center justify-between mt-4 mb-8 px-12">
    <span className="text-2xl">{text}</span>
    <Button variant="primary" label="+ Add Todo" onClick={onAddClick} />
  </div>
);

export default PageTitle;
