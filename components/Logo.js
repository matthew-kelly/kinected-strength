import { motion } from "framer-motion";
import { colors } from "../utils/theme";

const variants = {
  initial: {
    fill: colors["primary-light"],
  },
  hover: {
    fill: colors["secondary-light"],
  },
};

export default function Logo({
  noHover = false,
  heightClass = "md:h-[60px] h-9",
}) {
  return (
    <div className={`flex items-center relative gap-6`}>
      {noHover ? (
        <svg
          // width="307"
          // height="60"
          viewBox="0 0 192 45"
          fill={colors["primary-light"]}
        >
          <path d="M7.20703 18.0527L9.75586 15.4307L15.5127 24H21.3721L13.2861 12.3691L21.0352 4.10742H14.9561L7.20703 12.4863V4.10742H2.3877V24H7.20703V18.0527ZM29.5107 4.10742V24H34.3301V4.10742H29.5107ZM49.9102 11.9883L59.8564 24H64.0312V4.10742H59.2119V16.2363L49.1924 4.10742H45.0908V24H49.9102V11.9883ZM89.0449 24V19.957H79.6113V15.8994H87.7412V11.8564H79.6113V8.16504H88.8984V4.10742H74.792V24H89.0449ZM107.145 24.293C109.02 24.293 110.748 23.8535 112.315 22.9746C113.883 22.1104 115.143 20.8799 116.095 19.3125L112.403 16.6172C111.012 18.7266 109.254 19.7812 107.145 19.7812C105.489 19.7812 104.142 19.2393 103.131 18.1553C102.105 17.0859 101.593 15.709 101.593 14.0391C101.593 12.3691 102.105 10.9922 103.131 9.92285C104.142 8.85352 105.489 8.32617 107.145 8.32617C107.921 8.32617 108.653 8.47266 109.312 8.75098C110.631 9.33691 111.437 10.1865 112.315 11.5195L116.021 8.78027C115.113 7.27148 113.854 6.07031 112.242 5.16211C110.616 4.26855 108.917 3.81445 107.145 3.81445C105.196 3.81445 103.424 4.25391 101.827 5.13281C100.23 6.02637 98.9707 7.24219 98.0479 8.80957C97.125 10.377 96.6562 12.1201 96.6562 14.0391C96.6562 15.958 97.125 17.7012 98.0479 19.2686C98.9707 20.8359 100.23 22.0664 101.827 22.96C103.424 23.8535 105.196 24.293 107.145 24.293ZM128.599 8.25293V24H133.403V8.25293H139.277V4.10742H122.71V8.25293H128.599ZM162.123 24V19.957H152.689V15.8994H160.819V11.8564H152.689V8.16504H161.977V4.10742H147.87V24H162.123ZM180.296 24C181.673 24 182.991 23.7363 184.251 23.209C185.496 22.6816 186.58 21.9785 187.488 21.085C188.382 20.1914 189.1 19.1367 189.642 17.9062C190.169 16.6758 190.433 15.3867 190.433 14.0391C190.433 11.3291 189.29 8.76562 187.488 6.99316C186.58 6.11426 185.496 5.41113 184.251 4.88379C182.991 4.37109 181.673 4.10742 180.296 4.10742H171.595V24H180.296ZM176.414 8.16504H179.827C181.468 8.16504 182.815 8.73633 183.87 9.86426C184.925 10.9922 185.452 12.3838 185.452 14.0391C185.452 15.6943 184.925 17.0859 183.87 18.2285C182.815 19.3857 181.468 19.957 179.827 19.957H176.414V8.16504Z" />
          <path d="M56.3857 40.5742C56.6299 41.0576 57.0059 41.4336 57.5137 41.6973C58.0166 41.9658 58.5781 42.0977 59.1934 42.0977C59.8428 42.0977 60.4678 41.9268 60.9756 41.6094C61.4785 41.292 61.8057 40.7451 61.8057 40.0811C61.8301 39.4854 61.5566 39.0605 61.1758 38.7627C61.0537 38.665 60.8926 38.5674 60.6924 38.4697C60.4922 38.377 60.2969 38.2939 60.1113 38.2207C59.9258 38.1523 59.6914 38.0693 59.4082 37.9766C59.335 37.9521 59.2373 37.918 59.1201 37.8789C58.8809 37.8057 58.8027 37.7812 58.6318 37.7178C58.4561 37.6543 58.3975 37.6006 58.3047 37.5176C58.2119 37.4395 58.1826 37.3418 58.1826 37.2197C58.1826 36.9023 58.5049 36.6826 58.9688 36.6826C59.5059 36.6826 59.9795 36.9756 60.3896 37.5615L61.5762 36.6875C60.9268 35.7451 60.0576 35.2715 58.9688 35.2715C58.5586 35.2715 58.1729 35.3496 57.8115 35.5059C57.4453 35.6621 57.1475 35.8916 56.9131 36.1992C56.6787 36.5068 56.5615 36.8584 56.5615 37.249C56.5811 37.835 56.7422 38.2305 57.084 38.5283C57.3232 38.7432 57.5137 38.8701 57.8652 39.0117C58.0361 39.085 58.1924 39.1387 58.3242 39.1826C58.4561 39.2266 58.6221 39.2803 58.8271 39.3438C58.8711 39.3584 58.9395 39.3779 59.0225 39.4023C59.3203 39.4902 59.5303 39.5586 59.6572 39.6025C59.7793 39.6465 59.9014 39.7148 60.0137 39.8076C60.126 39.9004 60.1846 40.0127 60.1846 40.1348C60.1846 40.2861 60.0918 40.4082 59.9111 40.501C59.7256 40.5986 59.501 40.6475 59.2324 40.6475C58.5879 40.6475 57.9678 40.2812 57.5918 39.6953L56.3857 40.5742ZM68.042 36.751V42H69.6436V36.751H71.6016V35.3691H66.0791V36.751H68.042ZM78.0674 39.7148H79.1758L80.4307 42.0049H82.1641L80.7773 39.5244C81.1729 39.3535 81.4902 39.0947 81.7295 38.7432C81.9639 38.3916 82.0811 37.9863 82.0811 37.5225C82.0811 36.8975 81.8613 36.3799 81.4268 35.9746C80.9873 35.5693 80.4502 35.3691 79.8154 35.3691H76.4658V42H78.0674V39.7148ZM79.4688 36.7363C80.0596 36.7363 80.4355 37.0684 80.4355 37.5225C80.4355 38.0059 80.0596 38.3477 79.4688 38.3477H78.0674V36.7363H79.4688ZM91.9258 42V40.6523H88.7812V39.2998H91.4912V37.9521H88.7812V36.7217H91.877V35.3691H87.1748V42H91.9258ZM98.6895 37.9961L102.005 42H103.396V35.3691H101.79V39.4121L98.4502 35.3691H97.083V42H98.6895V37.9961ZM108.549 38.6797C108.549 39.3193 108.705 39.8955 109.013 40.418C109.32 40.9404 109.74 41.3506 110.272 41.6484C110.805 41.9463 111.396 42.0977 112.045 42.0977C112.66 42.0977 113.222 41.9658 113.729 41.7021C114.232 41.4385 114.633 41.0674 114.931 40.5938C115.224 40.1201 115.37 39.5879 115.37 39.002C115.37 38.7334 115.36 38.499 115.341 38.3086H111.889V39.6562H113.637C113.437 40.2617 112.821 40.5938 112.045 40.5938C111.493 40.5938 111.049 40.4131 110.707 40.0518C110.365 39.6953 110.194 39.2363 110.194 38.6797C110.194 38.123 110.365 37.6641 110.707 37.3076C111.049 36.9512 111.493 36.7754 112.045 36.7754C112.704 36.7754 113.241 37.0732 113.656 37.6738L114.892 36.7607C114.599 36.3262 114.198 35.9648 113.69 35.6865C113.178 35.4082 112.631 35.2715 112.045 35.2715C111.073 35.2715 110.18 35.6426 109.56 36.2432C108.935 36.8438 108.549 37.7227 108.549 38.6797ZM121.499 36.751V42H123.101V36.751H125.059V35.3691H119.536V36.751H121.499ZM129.923 42H131.529V39.29H134.4V42H136.007V35.3691H134.4V37.9424H131.529V35.3691H129.923V42Z" />
        </svg>
      ) : (
        <motion.svg
          // width="307"
          // height="60"
          className={heightClass}
          viewBox="0 0 192 45"
          fill={colors["primary-light"]}
          whileHover="hover"
          animate="initial"
          variants={variants}
        >
          <path d="M7.20703 18.0527L9.75586 15.4307L15.5127 24H21.3721L13.2861 12.3691L21.0352 4.10742H14.9561L7.20703 12.4863V4.10742H2.3877V24H7.20703V18.0527ZM29.5107 4.10742V24H34.3301V4.10742H29.5107ZM49.9102 11.9883L59.8564 24H64.0312V4.10742H59.2119V16.2363L49.1924 4.10742H45.0908V24H49.9102V11.9883ZM89.0449 24V19.957H79.6113V15.8994H87.7412V11.8564H79.6113V8.16504H88.8984V4.10742H74.792V24H89.0449ZM107.145 24.293C109.02 24.293 110.748 23.8535 112.315 22.9746C113.883 22.1104 115.143 20.8799 116.095 19.3125L112.403 16.6172C111.012 18.7266 109.254 19.7812 107.145 19.7812C105.489 19.7812 104.142 19.2393 103.131 18.1553C102.105 17.0859 101.593 15.709 101.593 14.0391C101.593 12.3691 102.105 10.9922 103.131 9.92285C104.142 8.85352 105.489 8.32617 107.145 8.32617C107.921 8.32617 108.653 8.47266 109.312 8.75098C110.631 9.33691 111.437 10.1865 112.315 11.5195L116.021 8.78027C115.113 7.27148 113.854 6.07031 112.242 5.16211C110.616 4.26855 108.917 3.81445 107.145 3.81445C105.196 3.81445 103.424 4.25391 101.827 5.13281C100.23 6.02637 98.9707 7.24219 98.0479 8.80957C97.125 10.377 96.6562 12.1201 96.6562 14.0391C96.6562 15.958 97.125 17.7012 98.0479 19.2686C98.9707 20.8359 100.23 22.0664 101.827 22.96C103.424 23.8535 105.196 24.293 107.145 24.293ZM128.599 8.25293V24H133.403V8.25293H139.277V4.10742H122.71V8.25293H128.599ZM162.123 24V19.957H152.689V15.8994H160.819V11.8564H152.689V8.16504H161.977V4.10742H147.87V24H162.123ZM180.296 24C181.673 24 182.991 23.7363 184.251 23.209C185.496 22.6816 186.58 21.9785 187.488 21.085C188.382 20.1914 189.1 19.1367 189.642 17.9062C190.169 16.6758 190.433 15.3867 190.433 14.0391C190.433 11.3291 189.29 8.76562 187.488 6.99316C186.58 6.11426 185.496 5.41113 184.251 4.88379C182.991 4.37109 181.673 4.10742 180.296 4.10742H171.595V24H180.296ZM176.414 8.16504H179.827C181.468 8.16504 182.815 8.73633 183.87 9.86426C184.925 10.9922 185.452 12.3838 185.452 14.0391C185.452 15.6943 184.925 17.0859 183.87 18.2285C182.815 19.3857 181.468 19.957 179.827 19.957H176.414V8.16504Z" />
          <path d="M56.3857 40.5742C56.6299 41.0576 57.0059 41.4336 57.5137 41.6973C58.0166 41.9658 58.5781 42.0977 59.1934 42.0977C59.8428 42.0977 60.4678 41.9268 60.9756 41.6094C61.4785 41.292 61.8057 40.7451 61.8057 40.0811C61.8301 39.4854 61.5566 39.0605 61.1758 38.7627C61.0537 38.665 60.8926 38.5674 60.6924 38.4697C60.4922 38.377 60.2969 38.2939 60.1113 38.2207C59.9258 38.1523 59.6914 38.0693 59.4082 37.9766C59.335 37.9521 59.2373 37.918 59.1201 37.8789C58.8809 37.8057 58.8027 37.7812 58.6318 37.7178C58.4561 37.6543 58.3975 37.6006 58.3047 37.5176C58.2119 37.4395 58.1826 37.3418 58.1826 37.2197C58.1826 36.9023 58.5049 36.6826 58.9688 36.6826C59.5059 36.6826 59.9795 36.9756 60.3896 37.5615L61.5762 36.6875C60.9268 35.7451 60.0576 35.2715 58.9688 35.2715C58.5586 35.2715 58.1729 35.3496 57.8115 35.5059C57.4453 35.6621 57.1475 35.8916 56.9131 36.1992C56.6787 36.5068 56.5615 36.8584 56.5615 37.249C56.5811 37.835 56.7422 38.2305 57.084 38.5283C57.3232 38.7432 57.5137 38.8701 57.8652 39.0117C58.0361 39.085 58.1924 39.1387 58.3242 39.1826C58.4561 39.2266 58.6221 39.2803 58.8271 39.3438C58.8711 39.3584 58.9395 39.3779 59.0225 39.4023C59.3203 39.4902 59.5303 39.5586 59.6572 39.6025C59.7793 39.6465 59.9014 39.7148 60.0137 39.8076C60.126 39.9004 60.1846 40.0127 60.1846 40.1348C60.1846 40.2861 60.0918 40.4082 59.9111 40.501C59.7256 40.5986 59.501 40.6475 59.2324 40.6475C58.5879 40.6475 57.9678 40.2812 57.5918 39.6953L56.3857 40.5742ZM68.042 36.751V42H69.6436V36.751H71.6016V35.3691H66.0791V36.751H68.042ZM78.0674 39.7148H79.1758L80.4307 42.0049H82.1641L80.7773 39.5244C81.1729 39.3535 81.4902 39.0947 81.7295 38.7432C81.9639 38.3916 82.0811 37.9863 82.0811 37.5225C82.0811 36.8975 81.8613 36.3799 81.4268 35.9746C80.9873 35.5693 80.4502 35.3691 79.8154 35.3691H76.4658V42H78.0674V39.7148ZM79.4688 36.7363C80.0596 36.7363 80.4355 37.0684 80.4355 37.5225C80.4355 38.0059 80.0596 38.3477 79.4688 38.3477H78.0674V36.7363H79.4688ZM91.9258 42V40.6523H88.7812V39.2998H91.4912V37.9521H88.7812V36.7217H91.877V35.3691H87.1748V42H91.9258ZM98.6895 37.9961L102.005 42H103.396V35.3691H101.79V39.4121L98.4502 35.3691H97.083V42H98.6895V37.9961ZM108.549 38.6797C108.549 39.3193 108.705 39.8955 109.013 40.418C109.32 40.9404 109.74 41.3506 110.272 41.6484C110.805 41.9463 111.396 42.0977 112.045 42.0977C112.66 42.0977 113.222 41.9658 113.729 41.7021C114.232 41.4385 114.633 41.0674 114.931 40.5938C115.224 40.1201 115.37 39.5879 115.37 39.002C115.37 38.7334 115.36 38.499 115.341 38.3086H111.889V39.6562H113.637C113.437 40.2617 112.821 40.5938 112.045 40.5938C111.493 40.5938 111.049 40.4131 110.707 40.0518C110.365 39.6953 110.194 39.2363 110.194 38.6797C110.194 38.123 110.365 37.6641 110.707 37.3076C111.049 36.9512 111.493 36.7754 112.045 36.7754C112.704 36.7754 113.241 37.0732 113.656 37.6738L114.892 36.7607C114.599 36.3262 114.198 35.9648 113.69 35.6865C113.178 35.4082 112.631 35.2715 112.045 35.2715C111.073 35.2715 110.18 35.6426 109.56 36.2432C108.935 36.8438 108.549 37.7227 108.549 38.6797ZM121.499 36.751V42H123.101V36.751H125.059V35.3691H119.536V36.751H121.499ZM129.923 42H131.529V39.29H134.4V42H136.007V35.3691H134.4V37.9424H131.529V35.3691H129.923V42Z" />
        </motion.svg>
      )}
    </div>
  );
}

// const variants = {
//   initial: {
//     fill: colors["primary-light"],
//   },
//   hover: {
//     fill: colors["secondary-dark"],
//   },
// };

// export default function Logo() {
//   return (
//     <motion.div
//       className="flex items-center relative gap-6"
//       whileHover="hover"
//       animate="initial"
//     >
//       <KLogo
//         width="50"
//         colorRect="fill-primary-light"
//         colorTop="fill-secondary-dark"
//         colorBottom="fill-secondary-light"
//       />
//       <motion.svg
//         width="307"
//         height="62"
//         viewBox="0 0 307 62"
//         fill={colors["primary-light"]}
//         variants={variants}
//       >
//         <path d="M3.61719 56.7188C4.00781 57.4922 4.60938 58.0938 5.42188 58.5156C6.22656 58.9453 7.125 59.1562 8.10938 59.1562C9.14844 59.1562 10.1484 58.8828 10.9609 58.375C11.7656 57.8672 12.2891 56.9922 12.2891 55.9297C12.3281 54.9766 11.8906 54.2969 11.2812 53.8203C11.0859 53.6641 10.8281 53.5078 10.5078 53.3516C10.1875 53.2031 9.875 53.0703 9.57812 52.9531C9.28125 52.8438 8.90625 52.7109 8.45312 52.5625C8.33594 52.5234 8.17969 52.4688 7.99219 52.4062C7.60938 52.2891 7.48438 52.25 7.21094 52.1484C6.92969 52.0469 6.83594 51.9609 6.6875 51.8281C6.53906 51.7031 6.49219 51.5469 6.49219 51.3516C6.49219 50.8438 7.00781 50.4922 7.75 50.4922C8.60938 50.4922 9.36719 50.9609 10.0234 51.8984L11.9219 50.5C10.8828 48.9922 9.49219 48.2344 7.75 48.2344C7.09375 48.2344 6.47656 48.3594 5.89844 48.6094C5.3125 48.8594 4.83594 49.2266 4.46094 49.7188C4.08594 50.2109 3.89844 50.7734 3.89844 51.3984C3.92969 52.3359 4.1875 52.9688 4.73438 53.4453C5.11719 53.7891 5.42188 53.9922 5.98438 54.2188C6.25781 54.3359 6.50781 54.4219 6.71875 54.4922C6.92969 54.5625 7.19531 54.6484 7.52344 54.75C7.59375 54.7734 7.70312 54.8047 7.83594 54.8438C8.3125 54.9844 8.64844 55.0938 8.85156 55.1641C9.04688 55.2344 9.24219 55.3438 9.42188 55.4922C9.60156 55.6406 9.69531 55.8203 9.69531 56.0156C9.69531 56.2578 9.54688 56.4531 9.25781 56.6016C8.96094 56.7578 8.60156 56.8359 8.17188 56.8359C7.14062 56.8359 6.14844 56.25 5.54688 55.3125L3.61719 56.7188ZM22.1072 50.6016V59H24.6697V50.6016H27.8025V48.3906H18.9666V50.6016H22.1072ZM37.9878 55.3438H39.7612L41.7691 59.0078H44.5425L42.3237 55.0391C42.9566 54.7656 43.4644 54.3516 43.8472 53.7891C44.2222 53.2266 44.4097 52.5781 44.4097 51.8359C44.4097 50.8359 44.0581 50.0078 43.3628 49.3594C42.6597 48.7109 41.8003 48.3906 40.7847 48.3906H35.4253V59H37.9878V55.3438ZM40.23 50.5781C41.1753 50.5781 41.7769 51.1094 41.7769 51.8359C41.7769 52.6094 41.1753 53.1562 40.23 53.1562H37.9878V50.5781H40.23ZM60.0013 59V56.8438H54.97V54.6797H59.3059V52.5234H54.97V50.5547H59.9231V48.3906H52.3997V59H60.0013ZM70.6631 52.5938L75.9678 59H78.1944V48.3906H75.6241V54.8594L70.2803 48.3906H68.0928V59H70.6631V52.5938ZM86.2781 53.6875C86.2781 54.7109 86.5281 55.6328 87.0203 56.4688C87.5125 57.3047 88.1844 57.9609 89.0359 58.4375C89.8875 58.9141 90.8328 59.1562 91.8719 59.1562C92.8562 59.1562 93.7547 58.9453 94.5672 58.5234C95.3719 58.1016 96.0125 57.5078 96.4891 56.75C96.9578 55.9922 97.1922 55.1406 97.1922 54.2031C97.1922 53.7734 97.1766 53.3984 97.1453 53.0938H91.6219V55.25H94.4187C94.0984 56.2188 93.1141 56.75 91.8719 56.75C90.9891 56.75 90.2781 56.4609 89.7312 55.8828C89.1844 55.3125 88.9109 54.5781 88.9109 53.6875C88.9109 52.7969 89.1844 52.0625 89.7312 51.4922C90.2781 50.9219 90.9891 50.6406 91.8719 50.6406C92.9266 50.6406 93.7859 51.1172 94.45 52.0781L96.4266 50.6172C95.9578 49.9219 95.3172 49.3438 94.5047 48.8984C93.6844 48.4531 92.8094 48.2344 91.8719 48.2344C90.3172 48.2344 88.8875 48.8281 87.8953 49.7891C86.8953 50.75 86.2781 52.1562 86.2781 53.6875ZM106.838 50.6016V59H109.401V50.6016H112.534V48.3906H103.698V50.6016H106.838ZM120.157 59H122.727V54.6641H127.321V59H129.891V48.3906H127.321V52.5078H122.727V48.3906H120.157V59Z" />
//         <path d="M11.5312 28.4844L15.6094 24.2891L24.8203 38H34.1953L21.2578 19.3906L33.6562 6.17188H23.9297L11.5312 19.5781V6.17188H3.82031V38H11.5312V28.4844ZM47.2172 6.17188V38H54.9281V6.17188H47.2172ZM79.8562 18.7812L95.7703 38H102.45V6.17188H94.7391V25.5781L78.7078 6.17188H72.1453V38H79.8562V18.7812ZM142.472 38V31.5312H127.378V25.0391H140.386V18.5703H127.378V12.6641H142.238V6.17188H119.667V38H142.472ZM171.431 38.4688C174.431 38.4688 177.197 37.7656 179.705 36.3594C182.212 34.9766 184.228 33.0078 185.752 30.5L179.845 26.1875C177.619 29.5625 174.806 31.25 171.431 31.25C168.783 31.25 166.627 30.3828 165.009 28.6484C163.369 26.9375 162.548 24.7344 162.548 22.0625C162.548 19.3906 163.369 17.1875 165.009 15.4766C166.627 13.7656 168.783 12.9219 171.431 12.9219C172.673 12.9219 173.845 13.1562 174.9 13.6016C177.009 14.5391 178.298 15.8984 179.705 18.0312L185.634 13.6484C184.181 11.2344 182.166 9.3125 179.587 7.85938C176.986 6.42969 174.267 5.70312 171.431 5.70312C168.314 5.70312 165.478 6.40625 162.923 7.8125C160.369 9.24219 158.353 11.1875 156.877 13.6953C155.4 16.2031 154.65 18.9922 154.65 22.0625C154.65 25.1328 155.4 27.9219 156.877 30.4297C158.353 32.9375 160.369 34.9062 162.923 36.3359C165.478 37.7656 168.314 38.4688 171.431 38.4688ZM205.758 12.8047V38H213.445V12.8047H222.844V6.17188H196.336V12.8047H205.758ZM259.397 38V31.5312H244.303V25.0391H257.311V18.5703H244.303V12.6641H259.163V6.17188H236.592V38H259.397ZM288.473 38C290.677 38 292.786 37.5781 294.802 36.7344C296.794 35.8906 298.528 34.7656 299.981 33.3359C301.411 31.9062 302.559 30.2188 303.427 28.25C304.27 26.2812 304.692 24.2188 304.692 22.0625C304.692 17.7266 302.864 13.625 299.981 10.7891C298.528 9.38281 296.794 8.25781 294.802 7.41406C292.786 6.59375 290.677 6.17188 288.473 6.17188H274.552V38H288.473ZM282.263 12.6641H287.723C290.348 12.6641 292.505 13.5781 294.192 15.3828C295.88 17.1875 296.723 19.4141 296.723 22.0625C296.723 24.7109 295.88 26.9375 294.192 28.7656C292.505 30.6172 290.348 31.5312 287.723 31.5312H282.263V12.6641Z" />
//       </motion.svg>
//     </motion.div>
//   );
// }
