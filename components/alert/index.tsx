import { ReactNode } from "react"

type Prop = {
    children: ReactNode;
    title: string;
    type: "info" | "success" | "warning" | "danger";
  };
  
  export const AlertInfo = ({ children, title, type }: Prop) => {

    const styles = {
      info: {
        bg: "bg-sky-200",
        text: "text-sky-800",
        border: "border-sky-800",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        ),
      },
      success: {
        bg: "bg-green-200",
        text: "text-green-800",
        border: "border-green-800",
        icon: (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7"
          >
            
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            
           
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.5 12.5l4 4 7-10"
            />
          </svg>
          
        ),
      },
      warning: {
        bg: "bg-yellow-200",
        text: "text-yellow-800",
        border: "border-yellow-800",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.7000v."
            />
          </svg>
        ),
      },
      danger: {
        bg: "bg-red-200",
        text: "text-red-800",
        border: "border-red-800",
        icon: (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />

            
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6l12 12"
            />
            
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6"
            />
          </svg>
          
        ),
      },
    };
  
    const { bg, text, border, icon } = styles[type];
  
    return (
      <main>
        <section>
          <div
            className={`my-2 ${bg} rounded-md ${text} px-4 py-3 shadow-md border-l-4 ${border}`}
            role="alert"
          >
            <div className="flex gap-1">
              <div>{icon}</div>
              <div>
                <p className="font-bold text-lg">{title}</p>
                <div className="text-sm">{children}</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  };
  