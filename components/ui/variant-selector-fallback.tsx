import { Product } from '@/lib/shopify/types';

interface VariantSelectorFallbackProps {
  product: Product;
}

export function VariantSelectorFallback({
  product,
}: VariantSelectorFallbackProps) {
  return (
    <div className="space-y-4">
      {product.options.map(option => (
        <div key={option.id} className="space-y-2">
          <dt className="text-base font-semibold leading-7">{option.name}</dt>
          <dd className="flex flex-wrap gap-2">
            {option.values.map(value => (
              <div
                key={value.id}
                className="animate-pulse bg-muted h-10 w-20 rounded cursor-not-allowed"
              />
            ))}
          </dd>
        </div>
      ))}
    </div>
  );
}
