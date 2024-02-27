import Link from 'next/link';
import Image from 'next/image';

import classes from './meal-item.module.css';


export default function MealItem({ title, slug, images, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Link href={`/meals/${slug}`}>
            <Image src={images[0]} alt={title} fill />
          </Link>
        </div>
        <div className={classes.headerText}>
          <h2>
            <Link href={`/meals/${slug}`}>
              {title}
            </Link>
          </h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}