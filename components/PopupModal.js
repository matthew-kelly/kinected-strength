import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { disableScroll, enableScroll } from "@/utils/scroll";
import Cookies from "js-cookie";
import Link from "next/link";
import Button from "./Button";
import usePopupData from "@/lib/usePopupData";
import { PortableText } from "@portabletext/react";
import BlockImage from "./BlockImage";
import { colors } from "@/utils/theme";
import BlockCTA from "./BlockCTA";

const POPUP_FIELD = "popup_has_triggered";

export default function PopupModal({ fontVar }) {
  const [isOpen, setIsOpen] = useState(false);

  const { data: popupData } = usePopupData();

  // TODO: if CTA is email form, close form after successful submission after a second

  const closePopup = () => {
    if (popupData.trigger.triggerType === "cookie") {
      Cookies.set(POPUP_FIELD, popupData._rev, {
        expires: popupData.trigger.cookieLength,
      });
    } else {
      sessionStorage.setItem(POPUP_FIELD, true);
    }
    enableScroll();
    setIsOpen(false);
  };

  const openPopup = () => {
    window.removeEventListener("mousemove", openPopup);
    window.removeEventListener("scrollend", openPopup);
    window.removeEventListener("touchend", openPopup);
    disableScroll();
    setIsOpen(true);
  };

  useEffect(() => {
    if (!popupData || !popupData?.active) return;

    // check for cookie/session token that says popup has already triggered
    // cookie has value of revision id, compare that to incoming revision
    const popupCookie = Cookies.get(POPUP_FIELD) === popupData._rev;
    const popupSession = sessionStorage.getItem(POPUP_FIELD);

    let trigger =
      popupData.trigger.triggerType === "cookie" ? popupCookie : popupSession;

    // trigger popup if session does not exists, or if cookie doesn't exist or doesn't match new rev id
    if (!trigger) {
      setTimeout(() => {
        window.addEventListener("mousemove", openPopup);
        window.addEventListener("scrollend", openPopup);
        if (!("scrollend" in window)) {
          window.addEventListener("touchend", openPopup);
        }
      }, 3000);
    }

    return () => {
      window.removeEventListener("mousemove", openPopup);
      window.removeEventListener("scrollend", openPopup);
      window.removeEventListener("touchend", openPopup);
    };
  }, [popupData]);

  return (
    popupData?.active && (
      <Popup open={isOpen} closeOnEscape onClose={closePopup} modal>
        <div className={`${fontVar} fixed inset-0 flex z-[999]`}>
          {/* popup overlay */}
          <div
            className="popupmodal-overlay fixed inset-0 pointer-events-auto"
            onClick={popupData?.clickToClose ? closePopup : () => {}}
          />
          {/* popup box */}
          <div className="popupmodal-box relative m-auto w-11/12 max-w-xl overflow-y-auto max-h-screen">
            <button
              className="cursor-pointer absolute top-1 right-1 w-8 z-10"
              onClick={closePopup}
              aria-label="close popup"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="hover:fill-secondary-dark transition-all"
                fill={colors[popupData.content.xColour]}
              >
                <title>close</title>
                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
              </svg>
            </button>
            {popupData.content?.useImage && (
              <BlockImage
                value={popupData.content.image}
                className={`w-full rounded-t-lg ${
                  popupData.content?.useContent ||
                  popupData.content?.callToActionType !== "none"
                    ? ""
                    : "rounded-b-lg"
                }`}
              />
            )}
            {(popupData.content?.useContent ||
              popupData.content?.callToActionType !== "none") && (
              <div
                className={`py-4 px-6 md:px-8 flex flex-col rounded-b-lg bg-primary-light ${
                  popupData.content?.useImage ? "" : "rounded-t-lg pt-6"
                }`}
                style={{
                  backgroundColor: colors[popupData.content.backgroundColour],
                }}
              >
                {popupData.content.useContent && popupData.content.title && (
                  <h1 className="text-primary-dark font-display mb-2 text-xl sm:text-2xl md:text-3xl">
                    {popupData.content.title}
                  </h1>
                )}
                {popupData.content.useContent && popupData.content.body && (
                  <div className="prose prose-sm text-xs md:text-base prose-headings:text-primary-dark prose-p:mt-0 prose-p:mb-1 prose-p:text-primary-dark prose-a:text-primary-dark prose-img:my-2">
                    <PortableText
                      value={popupData.content.body}
                      components={{
                        types: {
                          image: ({ value }) => <BlockImage value={value} />,
                          CTA: ({ value }) => <BlockCTA value={value} />,
                        },
                        marks: {
                          link: ({ value, children }) => {
                            const { external, href } = value;
                            return external ? (
                              <a href={href} target="_blank" rel="noreferrer">
                                {children}
                              </a>
                            ) : (
                              <a href={href}>{children}</a>
                            );
                          },
                        },
                      }}
                    />
                  </div>
                )}
                {popupData.content.callToActionType === "link" && (
                  <Link
                    href={popupData.content.link.url}
                    className={`block mx-auto ${
                      popupData.content.useContent ? "mt-2" : ""
                    }`}
                    onClick={closePopup}
                  >
                    <Button className="md:large">
                      <span className="whitespace-nowrap">
                        {popupData.content.link.text}
                      </span>
                    </Button>
                  </Link>
                )}
                {popupData.content.callToActionType === "form" && (
                  <>
                    {/* TODO: form option */}
                    <p>{popupData.content.form.key}</p>
                    <Button className="md:large block mx-auto mt-2">
                      <span className="whitespace-nowrap">
                        {popupData.content.form.text}
                      </span>
                    </Button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </Popup>
    )
  );
}
