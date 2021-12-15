import styles from "./custom.module.css";

function InputCustom({ label, ...children }) {
  const { formGroup, formControl } = styles;

  return (
    <div className={formGroup}>
      <label>{label}</label>
      <input {...children} className={formControl} />
    </div>
  )
}

InputCustom.propTypes = {

}

export default InputCustom

