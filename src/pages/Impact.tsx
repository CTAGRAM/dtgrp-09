import Layout from '../components/layout/Layout';
import ImpactCard from '../components/impact/ImpactCard';
import ProgressRing from '../components/impact/ProgressRing';
import CtaSection from '../components/shared/CtaSection';
import ScrollAnimator from '../components/ui/ScrollAnimator';
import { LineChart, Line, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Truck, RecycleIcon, Leaf, Droplet, TrendingUp, Clock } from 'lucide-react';

const monthlyData = [
  { name: 'Jan', waste: 400, recycled: 240 },
  { name: 'Feb', waste: 380, recycled: 230 },
  { name: 'Mar', waste: 410, recycled: 260 },
  { name: 'Apr', waste: 390, recycled: 270 },
  { name: 'May', waste: 370, recycled: 280 },
  { name: 'Jun', waste: 350, recycled: 290 },
];

const carbonData = [
  { name: 'Traditional', value: 45, color: '#94a3b8' },
  { name: 'EcoTrack', value: 12, color: '#6366F1' },
];

const Impact = () => {
  return (
    <Layout>
      <section className="pt-20 pb-8 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <h1 className="heading-lg mb-4">Your Environmental Impact</h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Based on your survey responses, here's how our smart waste management solution could impact your operations and the environment.
              </p>
            </div>
          </ScrollAnimator>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <ImpactCard
              title="Fuel Reduction"
              value={32}
              suffix="%"
              description="Decrease in fuel consumption through optimized routes"
              color="bg-primary"
              icon={<Truck size={24} />}
              delay={100}
            />
            
            <ImpactCard
              title="Recycling Increase"
              value={28}
              suffix="%"
              description="Improvement in recycling rates with better sorting and tracking"
              color="bg-green-500"
              icon={<RecycleIcon size={24} />}
              delay={200}
            />
            
            <ImpactCard
              title="CO₂ Reduction"
              value={12600}
              suffix="kg"
              description="Annual reduction in carbon emissions"
              color="bg-blue-500"
              icon={<Leaf size={24} />}
              delay={300}
            />
            
            <ImpactCard
              title="Water Saved"
              value={426000}
              suffix="L"
              description="Annual water conservation through improved processes"
              color="bg-cyan-500"
              icon={<Droplet size={24} />}
              delay={400}
            />
            
            <ImpactCard
              title="Operational Savings"
              value={28}
              prefix="$"
              suffix="K"
              description="Estimated annual cost savings"
              color="bg-highlight"
              icon={<TrendingUp size={24} />}
              delay={500}
            />
            
            <ImpactCard
              title="Time Saved"
              value={520}
              suffix="h"
              description="Annual labor hours saved through automation"
              color="bg-purple-500"
              icon={<Clock size={24} />}
              delay={600}
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollAnimator>
            <h2 className="heading-md text-center mb-12 text-foreground">Detailed Analytics</h2>
          </ScrollAnimator>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <ScrollAnimator delay={100}>
              <div className="bg-card p-6 rounded-xl shadow-md dark:shadow-none border border-border">
                <h3 className="text-xl font-bold mb-4">Monthly Waste Collection & Recycling</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={monthlyData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="name" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="waste" 
                        name="Total Waste (tons)" 
                        stroke="#94a3b8" 
                        strokeWidth={2} 
                        activeDot={{ r: 8 }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="recycled" 
                        name="Recycled (tons)" 
                        stroke="#6366F1" 
                        strokeWidth={2} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </ScrollAnimator>
            
            <ScrollAnimator delay={200}>
              <div className="bg-card p-6 rounded-xl shadow-md dark:shadow-none border border-border">
                <h3 className="text-xl font-bold mb-4">Carbon Footprint Comparison</h3>
                <p className="text-muted-foreground mb-6">
                  Tons of CO₂ emissions per year for waste management operations
                </p>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={carbonData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="name" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" name="CO₂ Emissions (tons)">
                        {carbonData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </ScrollAnimator>
          </div>
          
          <div className="text-center mb-12">
            <ScrollAnimator>
              <h2 className="heading-md mb-8 text-foreground">Goal Progress</h2>
            </ScrollAnimator>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimator delay={100}>
                <div className="bg-card p-6 rounded-xl shadow-md dark:shadow-none border border-border">
                  <h3 className="text-lg font-bold mb-4">Recycling Rate</h3>
                  <ProgressRing progress={68} color="#10b981" size={160} strokeWidth={12}>
                    <span className="text-2xl font-bold">68%</span>
                  </ProgressRing>
                  <p className="text-muted-foreground mt-4 text-center">
                    Current recycling rate<br />vs. 40% industry average
                  </p>
                </div>
              </ScrollAnimator>
              
              <ScrollAnimator delay={200}>
                <div className="bg-card p-6 rounded-xl shadow-md dark:shadow-none border border-border">
                  <h3 className="text-lg font-bold mb-4">Route Efficiency</h3>
                  <ProgressRing progress={85} color="#6366F1" size={160} strokeWidth={12}>
                    <span className="text-2xl font-bold">85%</span>
                  </ProgressRing>
                  <p className="text-muted-foreground mt-4 text-center">
                    Collection route optimization<br />vs. traditional routes
                  </p>
                </div>
              </ScrollAnimator>
              
              <ScrollAnimator delay={300}>
                <div className="bg-card p-6 rounded-xl shadow-md dark:shadow-none border border-border">
                  <h3 className="text-lg font-bold mb-4">Carbon Reduction</h3>
                  <ProgressRing progress={72} color="#0ea5e9" size={160} strokeWidth={12}>
                    <span className="text-2xl font-bold">72%</span>
                  </ProgressRing>
                  <p className="text-muted-foreground mt-4 text-center">
                    Progress toward carbon<br />reduction goal
                  </p>
                </div>
              </ScrollAnimator>
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection 
        title="Ready to make this impact a reality?"
        description="Schedule a demo today and see how EcoTrack can transform your waste management operations."
        primaryButtonText="Schedule Demo"
        secondaryButtonText="Download Report"
        bgColor="bg-background"
      />
    </Layout>
  );
};

export default Impact;
