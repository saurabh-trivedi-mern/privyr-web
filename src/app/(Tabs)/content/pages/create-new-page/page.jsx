'use client';
import { useSearchParams } from 'next/navigation';
import ImageGalleryFormModal from '../../components/ImageGalleryFormModal';
import ProductOrEventFormModal from '../../components/ProductOrEventFormModal';

export default function CreateNewPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  return (
    <div className="w-full max-w-[1024px] mx-auto px-4">
      {type === 'image-gallery' && <ImageGalleryFormModal />}
      {type === 'product-event' && <ProductOrEventFormModal />}
      {!type && <p className="text-center text-gray-500 py-10">Please select a template.</p>}
    </div>
  );
}
