import { CheckCircle, Upload, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    id: 1,
    title: "1. Certification",
    description: "Upload qualification information",
    icon: CheckCircle,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-500",
    buttonColor: "bg-pink-500 hover:bg-pink-600",
  },
  {
    id: 2,
    title: "2. Upload a product",
    description: "Fill in product information",
    icon: Upload,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
  },
  {
    id: 3,
    title: "3. Open for sale",
    description: "Choose to open any sales channel",
    icon: ShoppingBag,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-500",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
  },
];

export function ProgressSteps() {
  return (
    <div className="mb-8 bg-white rounded-xl shadow-md p-6">
      <div className="flex items-start justify-between">
        {/* Left Side: Text */}
        <div className="w-1/3 pr-6">
          <h2 className="text-xl font-medium text-gray-900 mb-1">
            Well begun is half done
          </h2>
          <p className="text-sm text-gray-500">
            Complete the following steps to sell
          </p>
        </div>

        {/* Right Side: Steps */}
        <div className="w-2/3 grid grid-cols-3 gap-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`${step.bgColor} rounded-lg p-4 relative`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <step.icon className={`w-5 h-5 ${step.iconColor}`} />
                  <h3 className="font-medium text-gray-900">{step.title}</h3>
                </div>
                <Button
                  size="sm"
                  className={`${step.buttonColor} text-white px-4 py-1 h-7 text-xs`}
                >
                  GO
                </Button>
              </div>
              <p className="text-xs text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
