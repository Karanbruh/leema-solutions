
const AboutusDetail = () => {
    return (
        <section className="py-10 md:py-20 xl:py-40 dark:bg-secondary">
            <div className='container'>
                <div className='flex flex-col xl:flex-row gap-8'>
                    <div className='max-w-xl w-full'>
                        <h2 className='text-56'>Leema Solutions</h2>
                    </div>
                    <div className='flex flex-col gap-12'>
<p className="text-secondary dark:text-white">
Leema Solutions might look like a new name, but our foundation is built on over 12 years of hands-on experience in broadcasting, live productions, and large-scale events. Our team has served as the technical backbone for some of India’s most demanding productions — from major sports leagues and reality television shows to esports tournaments and corporate events.
</p>
<p className='text-secondary dark:text-white'>
We don’t just supply equipment — we solve problems. Whether it’s a high-stakes cricket broadcast, a multi-camera reality show, or a stadium-sized event production, our expertise ensures flawless execution, zero downtime, and seamless signal delivery to millions of viewers.
</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 md:p-20 xl:p-40">
  <div>
    <h4 className="font-semibold">Precision</h4>
    <p className="text-secondary/70 dark:text-white/70 text-sm">
      We get it right the first time. Live TV has no second take.
    </p>
  </div>

  <div>
    <h4 className="font-semibold">Quality</h4>
    <p className="text-secondary/70 dark:text-white/70 text-sm">
      We maintain the latest cinema-grade broadcast and production equipment.
    </p>
  </div>

  <div>
    <h4 className="font-semibold">Scale</h4>
    <p className="text-secondary/70 dark:text-white/70 text-sm">
      From studio productions to stadium-scale events, we handle projects of every size.
    </p>
  </div>
</div>
        </section>
    )
}

export default AboutusDetail