// FILE: src/routes/index.tsx
// ==========================================

import { component$ } from '@builder.io/qwik';
import { FramerQwik } from '~/integrations/react/framer';
import { ImageGallery } from '~/integrations/react/image-gallery';

export default component$(() => {
  return (
    <div class="flex flex-col gap-4">
      <h1 class="text-3xl">Qwik/React Framer Motion</h1>
      <div class="grid place-content-center h-screen">
        <FramerQwik client:idle />
      </div>
      <ImageGallery client:visible />
    </div>
  );
});
