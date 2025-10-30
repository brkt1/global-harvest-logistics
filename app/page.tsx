import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Truck, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Sam Commodities</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition">
              Products
            </a>
            <a href="#" className="text-foreground hover:text-primary transition">
              About
            </a>
            <a href="#" className="text-foreground hover:text-primary transition">
              Contact
            </a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Get Quote</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-accent/20 rounded-full">
                <span className="text-sm font-semibold text-primary">Trusted Export Partner</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                Welcome to Your Trusted Export Partner in Ethiopia
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Your search for a reliable and expert source for Ethiopian agricultural products ends here. At Sam
                Commodities, we are committed to delivering excellence in every shipment of sesame, pulses, and beans.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                We understand the complexities of international trade, which is why we handle the entire supply chain,
                from carefully sourcing and quality preparation in our warehouse to seamless logistics through Djibouti
                port.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Start Partnership <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <img
                src="/ethiopian-agricultural-products-sesame-beans-pulse.jpg"
                alt="Ethiopian agricultural products"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-20 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl md:text-2xl text-foreground font-semibold text-balance">
            Our mission is to make importing from Ethiopia a seamless and successful experience for you.
          </p>
          <p className="text-lg text-muted-foreground mt-4">Let's build a fruitful partnership.</p>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Built on Three Pillars of Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality, reliability, and innovation sets us apart in the agricultural export industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Quality Sourcing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We carefully select and source the finest Ethiopian agricultural products, ensuring every shipment
                  meets the highest international standards.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Seamless Logistics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From warehouse preparation to port logistics through Djibouti, we manage every step of the supply
                  chain with precision and care.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Trusted Partnership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We build lasting relationships with our partners, providing reliable service and expert guidance
                  throughout the entire import process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your agricultural import needs and discover how we can support your
            business.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">Sam Commodities</h3>
              <p className="text-sm text-muted-foreground">Your trusted partner for Ethiopian agricultural exports.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Sesame
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Pulses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Beans
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground">
                Email: info@samcommodities.com
                <br />
                Phone: +251 XXX XXX XXX
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Sam Commodities. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
