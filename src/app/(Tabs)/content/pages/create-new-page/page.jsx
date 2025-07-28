// app/(Tabs)/content/pages/create-new-page/page.jsx

import React, { Suspense } from 'react';
import CreateNewPageClient from './CreateNewPageClient';

export default function CreateNewPagePage() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <CreateNewPageClient />
    </Suspense>
  );
}
