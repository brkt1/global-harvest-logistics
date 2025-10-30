export default function QuoteLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ghl-primary-50 via-white to-ghl-secondary-50 relative">
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]">
        <div className="absolute -top-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-ghl-primary-200/50 to-ghl-secondary-200/50 blur-3xl" />
      </div>

      <section className="relative z-10 py-10 sm:py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="h-10 bg-ghl-neutral-200 rounded-lg w-3/4 mx-auto mb-4 animate-pulse" />
            <div className="h-6 bg-ghl-neutral-200 rounded-lg w-2/3 mx-auto animate-pulse" />
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* form skeleton */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-ghl-neutral-200/70 bg-white/80 backdrop-blur shadow-xl p-5 sm:p-8">
                <div className="space-y-6">
                  {[1, 2, 3].map((section) => (
                    <div key={section} className="space-y-4">
                      <div className="h-6 bg-ghl-neutral-200 rounded-lg w-1/3 animate-pulse" />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((field) => (
                          <div key={field} className="space-y-2">
                            <div className="h-4 bg-ghl-neutral-200 rounded w-1/2 animate-pulse" />
                            <div className="h-10 bg-ghl-neutral-200 rounded-xl animate-pulse" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="h-10 bg-ghl-neutral-200 rounded-full w-1/3 animate-pulse" />
                </div>
              </div>
            </div>

            {/* summary skeleton */}
            <aside className="lg:sticky lg:top-6 h-fit">
              <div className="rounded-2xl border border-ghl-neutral-200/70 bg-white/80 backdrop-blur shadow-xl p-5 sm:p-6">
                <div className="h-6 bg-ghl-neutral-200 rounded-lg w-1/3 mb-4 animate-pulse" />
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="h-4 bg-ghl-neutral-200 rounded animate-pulse" />
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
