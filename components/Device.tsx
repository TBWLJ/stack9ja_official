import Image from "next/image";


const Device = () => {
    return (

        <section className="pt-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-6">
            <div className="grid gap-6 lg:grid-cols-2">

            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-black">
                <Image
                    alt="img"
                    className="h-140 w-full object-cover transition duration-700 group-hover:scale-105"
                    src="/band1.png"
                    width={600}
                    height={25}
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-16 left-0 right-0 px-10 text-center">
                <p className="mb-2 text-lg text-white/90">
                    Kiosk-Link Band Sport
                </p>

                <h2 className="text-4xl font-bold text-white lg:text-5xl">
                    Designed for business.
                </h2>

                <p className="mx-auto mt-4 max-w-md text-lg text-white/80">
                    Built for teams that need speed, reliability and modern
                    customer experiences.
                </p>

                <div className="mt-8 flex justify-center gap-4">
                    <a
                    href="/shop"
                    className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
                    >
                    Shop
                    </a>

                    <a
                    href="/learn"
                    className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-neutral-200"
                    >
                    Learn more
                    </a>
                </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-3xl bg-black">
                <Image
                    alt="img"
                    className="h-140 w-full object-cover transition duration-700 group-hover:scale-105"
                    src="/band2.png"
                    width={100}
                    height={25}
                />
                

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-16 left-0 right-0 px-10 text-center">
                <p className="mb-2 text-lg text-white/90">
                    Kiosk-Link Band Pro
                </p>

                <h2 className="text-4xl font-bold text-white lg:text-5xl">
                    Advanced.
                    <br />
                    Inside and out.
                </h2>

                <p className="mx-auto mt-4 max-w-md text-lg text-white/80">
                    Engineered for modern businesses that demand more.
                </p>

                <div className="mt-8 flex justify-center gap-4">
                    <a
                    href="/shop"
                    className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
                    >
                    Shop
                    </a>

                    <a
                    href="/learn"
                    className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-neutral-200"
                    >
                    Learn more
                    </a>
                </div>
                </div>
            </div>

            </div>
        </div>
        </section>
    )
}

export default Device;