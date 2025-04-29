import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ScrollAnimator from '../ui/ScrollAnimator';

const monthlyWasteData = [
  { month: 'Jan', household: 450, commercial: 380, industrial: 520 },
  { month: 'Feb', household: 420, commercial: 360, industrial: 490 },
  { month: 'Mar', household: 480, commercial: 400, industrial: 550 },
  { month: 'Apr', household: 460, commercial: 390, industrial: 530 },
  { month: 'May', household: 500, commercial: 420, industrial: 580 },
  { month: 'Jun', household: 520, commercial: 440, industrial: 600 },
];

const wasteComposition = [
  { type: 'Organic', percentage: 40 },
  { type: 'Plastic', percentage: 25 },
  { type: 'Paper', percentage: 15 },
  { type: 'Metal', percentage: 10 },
  { type: 'Glass', percentage: 5 },
  { type: 'Others', percentage: 5 },
];

const WasteGenerationData = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <ScrollAnimator>
          <h2 className="heading-md text-center mb-12">Waste Generation Analysis</h2>
        </ScrollAnimator>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ScrollAnimator delay={100}>
            <div className="bg-card p-6 rounded-xl shadow-md dark:shadow-none border border-border">
              <h3 className="text-xl font-bold mb-4">Monthly Waste Generation by Source</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={monthlyWasteData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="household"
                      name="Household"
                      stroke="#6366F1"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="commercial"
                      name="Commercial"
                      stroke="#10b981"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="industrial"
                      name="Industrial"
                      stroke="#f59e0b"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </ScrollAnimator>

          <ScrollAnimator delay={200}>
            <div className="bg-card p-6 rounded-xl shadow-md dark:shadow-none border border-border">
              <h3 className="text-xl font-bold mb-4">Waste Composition</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={wasteComposition}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="type" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="percentage"
                      name="Percentage (%)"
                      fill="#6366F1"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </ScrollAnimator>
        </div>

        <ScrollAnimator>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-muted-foreground">
              Our waste generation data shows significant variations across different sources and types.
              Understanding these patterns helps in developing targeted waste management strategies and
              improving resource allocation for collection and processing.
            </p>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
};

export default WasteGenerationData; 