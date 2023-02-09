import Link from "next/link";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-primary-dark w-full z-10 md:pt-0 pt-4">
      <div className="md:p-16 p-4 py-6 flex md:flex-row flex-col justify-between">
        <div className="w-full md:max-w-xs mr-8">
          <div className="md:max-w-xs max-w-[250px]">
            <svg viewBox="0 0 276 46">
              <path
                d="M70.207 15.0527L72.7559 12.4307L78.5127 21H84.3721L76.2861 9.36914L84.0352 1.10742H77.9561L70.207 9.48633V1.10742H65.3877V21H70.207V15.0527ZM95.5107 1.10742V21H100.33V1.10742H95.5107ZM118.91 8.98828L128.856 21H133.031V1.10742H128.212V13.2363L118.192 1.10742H114.091V21H118.91V8.98828ZM161.045 21V16.957H151.611V12.8994H159.741V8.85645H151.611V5.16504H160.898V1.10742H146.792V21H161.045ZM182.145 21.293C184.02 21.293 185.748 20.8535 187.315 19.9746C188.883 19.1104 190.143 17.8799 191.095 16.3125L187.403 13.6172C186.012 15.7266 184.254 16.7812 182.145 16.7812C180.489 16.7812 179.142 16.2393 178.131 15.1553C177.105 14.0859 176.593 12.709 176.593 11.0391C176.593 9.36914 177.105 7.99219 178.131 6.92285C179.142 5.85352 180.489 5.32617 182.145 5.32617C182.921 5.32617 183.653 5.47266 184.312 5.75098C185.631 6.33691 186.437 7.18652 187.315 8.51953L191.021 5.78027C190.113 4.27148 188.854 3.07031 187.242 2.16211C185.616 1.26855 183.917 0.814453 182.145 0.814453C180.196 0.814453 178.424 1.25391 176.827 2.13281C175.23 3.02637 173.971 4.24219 173.048 5.80957C172.125 7.37695 171.656 9.12012 171.656 11.0391C171.656 12.958 172.125 14.7012 173.048 16.2686C173.971 17.8359 175.23 19.0664 176.827 19.96C178.424 20.8535 180.196 21.293 182.145 21.293ZM206.599 5.25293V21H211.403V5.25293H217.277V1.10742H200.71V5.25293H206.599ZM243.123 21V16.957H233.689V12.8994H241.819V8.85645H233.689V5.16504H242.977V1.10742H228.87V21H243.123ZM264.296 21C265.673 21 266.991 20.7363 268.251 20.209C269.496 19.6816 270.58 18.9785 271.488 18.085C272.382 17.1914 273.1 16.1367 273.642 14.9062C274.169 13.6758 274.433 12.3867 274.433 11.0391C274.433 8.3291 273.29 5.76562 271.488 3.99316C270.58 3.11426 269.496 2.41113 268.251 1.88379C266.991 1.37109 265.673 1.10742 264.296 1.10742H255.595V21H264.296ZM260.414 5.16504H263.827C265.468 5.16504 266.815 5.73633 267.87 6.86426C268.925 7.99219 269.452 9.38379 269.452 11.0391C269.452 12.6943 268.925 14.0859 267.87 15.2285C266.815 16.3857 265.468 16.957 263.827 16.957H260.414V5.16504Z"
                className="fill-primary-light"
              />
              <path
                d="M65.6816 43.2891C65.9746 43.8691 66.4258 44.3203 67.0352 44.6367C67.6387 44.959 68.3125 45.1172 69.0508 45.1172C69.8301 45.1172 70.5801 44.9121 71.1895 44.5312C71.793 44.1504 72.1855 43.4941 72.1855 42.6973C72.2148 41.9824 71.8867 41.4727 71.4297 41.1152C71.2832 40.998 71.0898 40.8809 70.8496 40.7637C70.6094 40.6523 70.375 40.5527 70.1523 40.4648C69.9297 40.3828 69.6484 40.2832 69.3086 40.1719C69.2207 40.1426 69.1035 40.1016 68.9629 40.0547C68.6758 39.9668 68.582 39.9375 68.377 39.8613C68.166 39.7852 68.0957 39.7207 67.9844 39.6211C67.873 39.5273 67.8379 39.4102 67.8379 39.2637C67.8379 38.8828 68.2246 38.6191 68.7812 38.6191C69.4258 38.6191 69.9941 38.9707 70.4863 39.6738L71.9102 38.625C71.1309 37.4941 70.0879 36.9258 68.7812 36.9258C68.2891 36.9258 67.8262 37.0195 67.3926 37.207C66.9531 37.3945 66.5957 37.6699 66.3145 38.0391C66.0332 38.4082 65.8926 38.8301 65.8926 39.2988C65.916 40.002 66.1094 40.4766 66.5195 40.834C66.8066 41.0918 67.0352 41.2441 67.457 41.4141C67.6621 41.502 67.8496 41.5664 68.0078 41.6191C68.166 41.6719 68.3652 41.7363 68.6113 41.8125C68.6641 41.8301 68.7461 41.8535 68.8457 41.8828C69.2031 41.9883 69.4551 42.0703 69.6074 42.123C69.7539 42.1758 69.9004 42.2578 70.0352 42.3691C70.1699 42.4805 70.2402 42.6152 70.2402 42.7617C70.2402 42.9434 70.1289 43.0898 69.9121 43.2012C69.6895 43.3184 69.4199 43.377 69.0977 43.377C68.3242 43.377 67.5801 42.9375 67.1289 42.2344L65.6816 43.2891ZM79.5491 38.7012V45H81.471V38.7012H83.8206V37.043H77.1937V38.7012H79.5491ZM91.4596 42.2578H92.7897L94.2955 45.0059H96.3756L94.7116 42.0293C95.1862 41.8242 95.567 41.5137 95.8541 41.0918C96.1354 40.6699 96.276 40.1836 96.276 39.627C96.276 38.877 96.0123 38.2559 95.4909 37.7695C94.9635 37.2832 94.319 37.043 93.5573 37.043H89.5377V45H91.4596V42.2578ZM93.1413 38.6836C93.8502 38.6836 94.3014 39.082 94.3014 39.627C94.3014 40.207 93.8502 40.6172 93.1413 40.6172H91.4596V38.6836H93.1413ZM107.97 45V43.3828H104.196V41.7598H107.448V40.1426H104.196V38.666H107.911V37.043H102.269V45H107.97ZM115.966 40.1953L119.945 45H121.615V37.043H119.687V41.8945L115.679 37.043H114.038V45H115.966V40.1953ZM127.677 41.0156C127.677 41.7832 127.865 42.4746 128.234 43.1016C128.603 43.7285 129.107 44.2207 129.746 44.5781C130.384 44.9355 131.093 45.1172 131.873 45.1172C132.611 45.1172 133.285 44.959 133.894 44.6426C134.498 44.3262 134.978 43.8809 135.336 43.3125C135.687 42.7441 135.863 42.1055 135.863 41.4023C135.863 41.0801 135.851 40.7988 135.828 40.5703H131.685V42.1875H133.783C133.543 42.9141 132.804 43.3125 131.873 43.3125C131.211 43.3125 130.677 43.0957 130.267 42.6621C129.857 42.2344 129.652 41.6836 129.652 41.0156C129.652 40.3477 129.857 39.7969 130.267 39.3691C130.677 38.9414 131.211 38.7305 131.873 38.7305C132.664 38.7305 133.308 39.0879 133.806 39.8086L135.289 38.7129C134.937 38.1914 134.457 37.7578 133.847 37.4238C133.232 37.0898 132.576 36.9258 131.873 36.9258C130.707 36.9258 129.634 37.3711 128.89 38.0918C128.14 38.8125 127.677 39.8672 127.677 41.0156ZM143.098 38.7012V45H145.019V38.7012H147.369V37.043H140.742V38.7012H143.098ZM153.086 45H155.014V41.748H158.459V45H160.387V37.043H158.459V40.1309H155.014V37.043H153.086V45Z"
                className="fill-primary-light"
              />
              <g clipPath="url(#clip0_425_925)">
                <path
                  d="M21.3086 0H39.8641C39.8641 0 40.5028 24.8437 21.3172 23.1962L21.3086 0Z"
                  className="fill-secondary-dark"
                />
                <path
                  d="M21.3605 46.04L21.3174 23.1962C21.3174 23.1962 40.9517 22.0509 39.6226 46.04H21.3605Z"
                  className="fill-secondary-light"
                />
                <path
                  d="M0 0H16.8294V46.0136H0V0Z"
                  className="fill-primary-light"
                />
              </g>
              <defs>
                <clipPath id="clip0_425_925">
                  <rect width="39.8667" height="46" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="md:max-w-min max-w-none flex justify-between mt-6 md:ml-[70px]">
            <div className="flex md:gap-4 gap-6">
              <a
                href="https://instagram.com/kinectedstrength"
                target="_blank"
                rel="noreferrer"
                aria-label="Kinected Strength Instagram page"
              >
                <div className="bg-secondary-light hover:bg-primary-light rounded-full p-2">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.1208 5.53101C8.01538 5.53101 5.5105 8.03589 5.5105 11.1414C5.5105 14.2468 8.01538 16.7517 11.1208 16.7517C14.2263 16.7517 16.7312 14.2468 16.7312 11.1414C16.7312 8.03589 14.2263 5.53101 11.1208 5.53101ZM11.1208 14.7888C9.11401 14.7888 7.47339 13.1531 7.47339 11.1414C7.47339 9.12964 9.10913 7.4939 11.1208 7.4939C13.1326 7.4939 14.7683 9.12964 14.7683 11.1414C14.7683 13.1531 13.1277 14.7888 11.1208 14.7888ZM18.2693 5.30151C18.2693 6.02905 17.6834 6.61011 16.9607 6.61011C16.2332 6.61011 15.6521 6.02417 15.6521 5.30151C15.6521 4.57886 16.238 3.99292 16.9607 3.99292C17.6834 3.99292 18.2693 4.57886 18.2693 5.30151ZM21.9851 6.62964C21.9021 4.87671 21.5017 3.32397 20.2175 2.04468C18.9382 0.765381 17.3855 0.36499 15.6326 0.2771C13.8259 0.174561 8.41089 0.174561 6.60425 0.2771C4.8562 0.360107 3.30347 0.760498 2.01929 2.03979C0.735108 3.31909 0.3396 4.87183 0.251709 6.62476C0.14917 8.4314 0.14917 13.8464 0.251709 15.6531C0.334717 17.406 0.735108 18.9587 2.01929 20.238C3.30347 21.5173 4.85132 21.9177 6.60425 22.0056C8.41089 22.1082 13.8259 22.1082 15.6326 22.0056C17.3855 21.9226 18.9382 21.5222 20.2175 20.238C21.4968 18.9587 21.8972 17.406 21.9851 15.6531C22.0876 13.8464 22.0876 8.43628 21.9851 6.62964ZM19.6511 17.5916C19.2703 18.5486 18.533 19.2859 17.571 19.6716C16.1306 20.2429 12.7126 20.1111 11.1208 20.1111C9.52905 20.1111 6.1062 20.238 4.67065 19.6716C3.71362 19.2908 2.97632 18.5535 2.59058 17.5916C2.01929 16.1511 2.15112 12.7332 2.15112 11.1414C2.15112 9.54956 2.02417 6.12671 2.59058 4.69116C2.97144 3.73413 3.70874 2.99683 4.67065 2.61108C6.11108 2.03979 9.52905 2.17163 11.1208 2.17163C12.7126 2.17163 16.1355 2.04468 17.571 2.61108C18.5281 2.99194 19.2654 3.72925 19.6511 4.69116C20.2224 6.13159 20.0906 9.54956 20.0906 11.1414C20.0906 12.7332 20.2224 16.156 19.6511 17.5916Z"
                      className="fill-primary-dark"
                    />
                  </svg>
                </div>
              </a>
              <a
                href="https://facebook.com/kinectedstrength"
                target="_blank"
                rel="noreferrer"
                aria-label="Kinected Strength Facebook page"
              >
                <div className="bg-secondary-light hover:bg-primary-light rounded-full p-2">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5312 0H2.34375C1.72215 0 1.12601 0.24693 0.686468 0.686469C0.24693 1.12601 0 1.72215 0 2.34375L0 19.5312C0 20.1529 0.24693 20.749 0.686468 21.1885C1.12601 21.6281 1.72215 21.875 2.34375 21.875H9.04541V14.438H5.96924V10.9375H9.04541V8.26953C9.04541 5.23486 10.8521 3.55859 13.6191 3.55859C14.9443 3.55859 16.3301 3.79492 16.3301 3.79492V6.77344H14.8032C13.2988 6.77344 12.8296 7.70703 12.8296 8.66455V10.9375H16.188L15.6509 14.438H12.8296V21.875H19.5312C20.1529 21.875 20.749 21.6281 21.1885 21.1885C21.6281 20.749 21.875 20.1529 21.875 19.5312V2.34375C21.875 1.72215 21.6281 1.12601 21.1885 0.686469C20.749 0.24693 20.1529 0 19.5312 0Z"
                      className="fill-primary-dark"
                    />
                  </svg>
                </div>
              </a>
            </div>

            <div className="md:hidden block">
              <Link href="/contact">
                <Button className="light md:large justify-self-end">
                  <span className="whitespace-nowrap">Get in touch</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-end md:ml-8 md:mt-0 mt-4">
          {/* <FooterForm /> */}
          <span className="font-medium md:text-sm text-xs md:mb-4 md:mt-0 mt-2 text-primary-light text-right uppercase tracking-wider md:leading-7 leading-6">
            kinectedstrength@gmail.com <br />
            North Vancouver, BC
          </span>
          <div className="md:block hidden">
            <Link href="/contact">
              <Button className="light md:large">
                <span className="whitespace-nowrap">Get in touch</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-primary-light text-xs mb-4">
        <span>Kinected Strength | &copy; 2023</span>
        {/* // FIXME: links to sites */}
        <span>Site by Matty Kelly & Heather Haughn</span>
      </div>
    </footer>
  );
}
