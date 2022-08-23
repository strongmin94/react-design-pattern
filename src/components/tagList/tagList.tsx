import styles from "./tagList.module.css";

interface IProps {
  tags: Array<string>;
}

const TagList = ({ tags }: IProps) => {
  return (
    <ul className={styles.container}>
      {tags.map((item, idx) => (
        <li key={`tags_${idx}`} className={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
