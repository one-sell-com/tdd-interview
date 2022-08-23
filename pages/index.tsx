import React from 'react';

import { CategoryOfTheDay } from '../components/CategoryOfTheDay';
import { StatusOfApp } from '../components/StatusOfApp';

export default () => (
  <article>
    <h1 className="w-full text-center text-xl mt-6">Hello user!</h1>
    <section className="container mx-auto flex gap-5 mt-6">
      <CategoryOfTheDay url="electronics" />
      <StatusOfApp />
    </section>
  </article>
);