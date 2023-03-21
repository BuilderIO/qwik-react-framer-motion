import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { animate } from 'motion';

export default component$(() => {
  useVisibleTask$(() => {
    animate(
      '#animation-target',
      {
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        backgroundColor: [
          '#ff008c',
          '#d309e1',
          '#9c1aff',
          '#7700ff',
          '#ff008c',
        ],
      },
      {
        duration: 2,
        easing: 'ease-in-out',
        repeat: 2,
        direction: 'alternate',
      }
    );
  });
  return (
    <div
      id="animation-target"
      class="m-auto mt-24 w-52 h-52 bg-slate-500"
    ></div>
  );
});
