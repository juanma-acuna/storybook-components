import "./MyLabel.css";

export interface MyLabelProps {
  /**
   * Label to be displayed inside the component
   * @default "MyLabel"
   */
  label: string;
  /**
   * Size of the label
   * @default "normal"
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Transform all text to uppercase
   * @default false
   */
  allCaps?: boolean;
  /**
   * Text color of the label
   * @default "primary"
   */
  color?: "primary" | "secondary" | "tertiary" | "custom";
  /**
   * Custom font color
   */
  fontColor?: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
}
const MyLabel = ({
  allCaps,
  color = "primary",
  label = "No Label",
  size = "normal",
  fontColor = "",
  backgroundColor = "",
}: MyLabelProps) => {
  return (
    <span
      className={[label, `${size}`, `text-${color}`].join(" ")}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
