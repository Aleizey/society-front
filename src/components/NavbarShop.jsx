const NavbarShop = ({ currentStep }) => {
    const steps = ["SHIPPING", "PAYMENT", "OPTIONS", "CONFIRMATION"];
  
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex flex-wrap -mx-4">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;
  
            return (
              <div key={step} className="w-full sm:w-1/2 md:w-1/4 px-4">
                <div className="flex items-center p-4 rounded-lg">
                  <div
                    className={`inline-flex items-center justify-center rounded-full shrink-0 font-bold w-[37px] h-[37px] transition-all
                      ${isCompleted ? "bg-green-500 text-white" : ""}
                      ${isActive ? "bg-green-500 text-white border border-green-500" : ""}
                      ${!isCompleted && !isActive ? "bg-white text-green-500 border border-green-500" : ""}`}
                  >
                    {isCompleted ? (
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span className="ml-4 text-base font-semibold text-gray-900">{step}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default NavbarShop;
  