import { FC } from 'react';

import { tailwindColors } from '@/lib/colors';

const sizes: { [key: string]: number } = {
  md: 24,
  lg: 32,
  xl: 48,
  '2xl': 64,
};

export type IconType =
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'close'
  | 'close-circle'
  | 'company'
  | 'dashboard'
  | 'document'
  | 'download'
  | 'export-file'
  | 'eye'
  | 'filter'
  | 'gear'
  | 'hamburger'
  | 'home'
  | 'information'
  | 'link-plus'
  | 'maintenance'
  | 'notification'
  | 'phone'
  | 'question-circle'
  | 'search'
  | 'user-group';

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  fill?: keyof typeof tailwindColors;
  size?: keyof typeof sizes;
  icon: IconType;
}

const Icon: FC<IconProps> = ({
  fill = 'ocean-primary-10',
  size = 'md',
  icon = 'home',
  ...props
}) => {
  const color = tailwindColors[fill];

  return (
    <div {...props}>
      <svg
        width={sizes[size]}
        height={sizes[size]}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        {icon === 'chevron-down' && (
          <path
            d='M19.2 8.3999L12 15.5999L4.79995 8.3999'
            stroke={color}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        )}
        {icon === 'chevron-left' && (
          <path
            d='M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM14.707 16.293L13.293 17.707L7.586 12L13.293 6.293L14.707 7.707L10.414 12L14.707 16.293Z'
            fill={color}
          />
        )}
        {icon === 'chevron-right' && (
          <path
            d='M12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22ZM9.293 7.707L10.707 6.293L16.414 12L10.707 17.707L9.293 16.293L13.586 12L9.293 7.707Z'
            fill={color}
          />
        )}
        {icon === 'chevron-up' && (
          <path
            d='M4.80005 15.6001L12 8.4001L19.2 15.6001'
            stroke={color}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        )}
        {icon === 'close' && (
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M6.53033 5.46894C6.23744 5.17604 5.76256 5.17604 5.46967 5.46894C5.17678 5.76183 5.17678 6.2367 5.46967 6.5296L10.9401 12L5.47047 17.4696C5.17758 17.7625 5.17758 18.2374 5.47047 18.5303C5.76336 18.8232 6.23824 18.8232 6.53113 18.5303L12.0007 13.0607L17.4703 18.5303C17.7632 18.8232 18.2381 18.8232 18.531 18.5303C18.8239 18.2374 18.8239 17.7625 18.531 17.4696L13.0614 12L18.5318 6.5296C18.8247 6.2367 18.8247 5.76183 18.5318 5.46894C18.2389 5.17604 17.764 5.17604 17.4711 5.46894L12.0007 10.9393L6.53033 5.46894Z'
            fill={color}
          />
        )}
        {icon === 'close-circle' && (
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM7.05027 7.05027C7.44079 6.65974 8.07395 6.65974 8.46448 7.05027L12 10.5858L15.5355 7.05027C15.926 6.65974 16.5592 6.65974 16.9497 7.05027C17.3403 7.44079 17.3403 8.07395 16.9497 8.46448L13.4142 12L16.9498 15.5355C17.3403 15.9261 17.3403 16.5592 16.9498 16.9498C16.5592 17.3403 15.9261 17.3403 15.5355 16.9498L12 13.4142L8.46445 16.9498C8.07393 17.3403 7.44076 17.3403 7.05024 16.9498C6.65971 16.5592 6.65971 15.9261 7.05024 15.5355L10.5858 12L7.05027 8.46448C6.65974 8.07395 6.65974 7.44079 7.05027 7.05027Z'
            fill={color}
          />
        )}
        {icon === 'company' && (
          <>
            <mask
              id='mask0_4347_21303'
              style={{ maskType: 'luminance' }}
              maskUnits='userSpaceOnUse'
              x='1'
              y='1'
              width='22'
              height='21'
            >
              <path
                d='M2 21H22'
                stroke={color}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M7 13H5C4.44772 13 4 13.4477 4 14V20C4 20.5523 4.44772 21 5 21H7C7.55228 21 8 20.5523 8 20V14C8 13.4477 7.55228 13 7 13Z'
                fill={color}
                stroke={color}
                strokeWidth='2'
                strokeLinejoin='round'
              />
              <path
                d='M6 17H6.5'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='square'
                strokeLinejoin='round'
              />
              <path
                d='M19 2H9C8.44772 2 8 2.44772 8 3V20C8 20.5523 8.44772 21 9 21H19C19.5523 21 20 20.5523 20 20V3C20 2.44772 19.5523 2 19 2Z'
                fill={color}
                stroke={color}
                strokeWidth='2'
                strokeLinejoin='round'
              />
              <path
                d='M11 5H13V7H11V5ZM15 5H17V7H15V5ZM11 8.5H13V10.5H11V8.5ZM15 8.5H17V10.5H15V8.5ZM15 12H17V14H15V12ZM15 15.5H17V17.5H15V15.5Z'
                fill='black'
              />
            </mask>
            <g mask='url(#mask0_4347_21303)'>
              <path d='M0 0H24V24H0V0Z' fill={color} />
            </g>
          </>
        )}
        {icon === 'dashboard' && (
          <path
            d='M4 13H10C10.2652 13 10.5196 12.8946 10.7071 12.7071C10.8946 12.5196 11 12.2652 11 12V4C11 3.73478 10.8946 3.48043 10.7071 3.29289C10.5196 3.10536 10.2652 3 10 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V12C3 12.2652 3.10536 12.5196 3.29289 12.7071C3.48043 12.8946 3.73478 13 4 13ZM3 20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H10C10.2652 21 10.5196 20.8946 10.7071 20.7071C10.8946 20.5196 11 20.2652 11 20V16C11 15.7348 10.8946 15.4804 10.7071 15.2929C10.5196 15.1054 10.2652 15 10 15H4C3.73478 15 3.48043 15.1054 3.29289 15.2929C3.10536 15.4804 3 15.7348 3 16V20ZM13 20C13 20.2652 13.1054 20.5196 13.2929 20.7071C13.4804 20.8946 13.7348 21 14 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V13C21 12.7348 20.8946 12.4804 20.7071 12.2929C20.5196 12.1054 20.2652 12 20 12H14C13.7348 12 13.4804 12.1054 13.2929 12.2929C13.1054 12.4804 13 12.7348 13 13V20ZM14 10H20C20.2652 10 20.5196 9.89464 20.7071 9.70711C20.8946 9.51957 21 9.26522 21 9V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3H14C13.7348 3 13.4804 3.10536 13.2929 3.29289C13.1054 3.48043 13 3.73478 13 4V9C13 9.26522 13.1054 9.51957 13.2929 9.70711C13.4804 9.89464 13.7348 10 14 10Z'
            fill={color}
          />
        )}
        {icon === 'document' && (
          <>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M14.25 2.5C14.25 2.4337 14.2237 2.37011 14.1768 2.32322C14.1299 2.27634 14.0663 2.25 14 2.25H7C6.27065 2.25 5.57118 2.53973 5.05546 3.05546C4.53973 3.57118 4.25 4.27065 4.25 5V19C4.25 19.7293 4.53973 20.4288 5.05546 20.9445C5.57118 21.4603 6.27065 21.75 7 21.75H17C17.7293 21.75 18.4288 21.4603 18.9445 20.9445C19.4603 20.4288 19.75 19.7293 19.75 19V9.147C19.75 9.0807 19.7237 9.01711 19.6768 8.97022C19.6299 8.92334 19.5663 8.897 19.5 8.897H15C14.8011 8.897 14.6103 8.81798 14.4697 8.67733C14.329 8.53668 14.25 8.34591 14.25 8.147V2.5ZM15 12.25C15.1989 12.25 15.3897 12.329 15.5303 12.4697C15.671 12.6103 15.75 12.8011 15.75 13C15.75 13.1989 15.671 13.3897 15.5303 13.5303C15.3897 13.671 15.1989 13.75 15 13.75H9C8.80109 13.75 8.61032 13.671 8.46967 13.5303C8.32902 13.3897 8.25 13.1989 8.25 13C8.25 12.8011 8.32902 12.6103 8.46967 12.4697C8.61032 12.329 8.80109 12.25 9 12.25H15ZM15 16.25C15.1989 16.25 15.3897 16.329 15.5303 16.4697C15.671 16.6103 15.75 16.8011 15.75 17C15.75 17.1989 15.671 17.3897 15.5303 17.5303C15.3897 17.671 15.1989 17.75 15 17.75H9C8.80109 17.75 8.61032 17.671 8.46967 17.5303C8.32902 17.3897 8.25 17.1989 8.25 17C8.25 16.8011 8.32902 16.6103 8.46967 16.4697C8.61032 16.329 8.80109 16.25 9 16.25H15Z'
              fill={color}
            />
            <path
              d='M15.75 2.82396C15.75 2.63996 15.943 2.52296 16.086 2.63796C16.207 2.73596 16.316 2.84996 16.409 2.97996L19.422 7.17696C19.49 7.27296 19.416 7.39696 19.298 7.39696H16C15.9337 7.39696 15.8701 7.37062 15.8232 7.32373C15.7763 7.27685 15.75 7.21326 15.75 7.14696V2.82396Z'
              fill={color}
            />
          </>
        )}
        {icon === 'export-file' && (
          <path
            d='M6 2C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2M13 3.5L18.5 9H13M8.93 12.22H16V19.29L13.88 17.17L11.05 20L8.22 17.17L11.05 14.35'
            fill={color}
          />
        )}
        {icon === 'eye' && (
          <>
            <circle cx='12' cy='12' r='2.25' stroke={color} strokeWidth='1.5' />
            <path
              d='M21.2626 12.1768L18.7725 14.6669C17.9666 15.4728 17.036 16.1435 16.0167 16.6531C13.4881 17.9174 10.5119 17.9174 7.98332 16.6531C6.96395 16.1435 6.03342 15.4728 5.22754 14.6669L2.73744 12.1768C2.63981 12.0791 2.6398 11.9209 2.73744 11.8232L5.22754 9.33312C6.03342 8.52724 6.96395 7.85655 7.98332 7.34687C10.5119 6.08259 13.4881 6.08259 16.0167 7.34687C17.036 7.85655 17.9666 8.52724 18.7725 9.33312L21.2626 11.8232C21.3602 11.9209 21.3602 12.0791 21.2626 12.1768Z'
              stroke={color}
              strokeWidth='1.5'
            />
          </>
        )}
        {icon === 'filter' && (
          <>
            <path
              d='M2.56066 9.56066C1.61571 8.61571 2.28496 7 3.62132 7H20.3787C21.715 7 22.3843 8.61571 21.4393 9.56066L15 16V18.4648C15 18.7992 14.8329 19.1114 14.5547 19.2969L10.5547 21.9635C9.89014 22.4066 9 21.9302 9 21.1315V16L2.56066 9.56066Z'
              fill={color}
            />
            <rect x='2' y='2' width='20' height='3' rx='1.5' fill={color} />
          </>
        )}
        {icon === 'gear' && (
          <>
            <g clipPath='url(#clip0_4651_54331)'>
              <path
                d='M9.95405 2.21021C11.303 1.92735 12.6958 1.92667 14.045 2.20821C14.1349 2.8015 14.3574 3.3669 14.6958 3.86239C15.0343 4.35788 15.4801 4.77072 16 5.07021C16.5196 5.37075 17.1002 5.55028 17.6987 5.59547C18.2973 5.64065 18.8983 5.55033 19.457 5.33121C20.3753 6.35928 21.0709 7.56625 21.5 8.87622C21.0314 9.25079 20.6532 9.72616 20.3935 10.267C20.1338 10.8078 19.9993 11.4003 20 12.0002C20 13.2642 20.586 14.3912 21.502 15.1242C21.0704 16.4331 20.3739 17.6391 19.456 18.6672C18.8974 18.4483 18.2966 18.358 17.6983 18.4032C17.0999 18.4484 16.5195 18.6278 16 18.9282C15.4805 19.2276 15.0351 19.6402 14.6968 20.1353C14.3585 20.6304 14.1361 21.1954 14.046 21.7882C12.6973 22.0717 11.3044 22.0731 9.95505 21.7922C9.86559 21.1984 9.64335 20.6324 9.30487 20.1364C8.96639 19.6403 8.52038 19.227 8.00005 18.9272C7.48041 18.6268 6.89975 18.4475 6.30124 18.4025C5.70272 18.3575 5.10176 18.448 4.54305 18.6672C3.62465 17.6389 2.92905 16.4315 2.50005 15.1212C2.96844 14.7468 3.34651 14.2718 3.60618 13.7313C3.86586 13.1909 4.00048 12.5988 4.00005 11.9992C4.00054 11.3991 3.86575 10.8066 3.60571 10.2657C3.34568 9.72488 2.96707 9.24959 2.49805 8.87522C2.92972 7.56634 3.62616 6.36032 4.54405 5.33221C5.1027 5.55117 5.70352 5.64141 6.30184 5.59623C6.90017 5.55104 7.48062 5.37159 8.00005 5.07121C8.51959 4.77181 8.96503 4.35924 9.30331 3.86412C9.64158 3.369 9.864 2.80406 9.95405 2.21121V2.21021ZM12 15.0002C12.7957 15.0002 13.5588 14.6841 14.1214 14.1215C14.684 13.5589 15 12.7959 15 12.0002C15 11.2046 14.684 10.4415 14.1214 9.87889C13.5588 9.31629 12.7957 9.00022 12 9.00022C11.2044 9.00022 10.4413 9.31629 9.87873 9.87889C9.31612 10.4415 9.00005 11.2046 9.00005 12.0002C9.00005 12.7959 9.31612 13.5589 9.87873 14.1215C10.4413 14.6841 11.2044 15.0002 12 15.0002Z'
                fill={color}
              />
            </g>
            <defs>
              <clipPath id='clip0_4651_54331'>
                <rect width='24' height='24' fill={color} />
              </clipPath>
            </defs>
          </>
        )}
        {icon === 'hamburger' && (
          <>
            <rect x='3' y='6' width='18' height='2' rx='1' fill={color} />
            <rect x='3' y='11' width='18' height='2' rx='1' fill={color} />
            <rect x='3' y='16' width='18' height='2' rx='1' fill={color} />
          </>
        )}
        {icon === 'home' && (
          <path
            d='M20.6668 19.3334V10.2668C20.6668 10.1012 20.6282 9.93785 20.5542 9.78974C20.4801 9.64162 20.3726 9.51279 20.2401 9.41343L12.7734 3.81343C12.5888 3.67495 12.3642 3.6001 12.1334 3.6001C11.9026 3.6001 11.6781 3.67495 11.4934 3.81343L4.02676 9.41343C3.89429 9.51279 3.78676 9.64162 3.71271 9.78974C3.63865 9.93785 3.6001 10.1012 3.6001 10.2668V19.3334C3.6001 19.6163 3.71248 19.8876 3.91252 20.0877C4.11256 20.2877 4.38387 20.4001 4.66676 20.4001H8.93343C9.21633 20.4001 9.48764 20.2877 9.68768 20.0877C9.88772 19.8876 10.0001 19.6163 10.0001 19.3334V16.1334C10.0001 15.8505 10.1125 15.5792 10.3125 15.3792C10.5126 15.1791 10.7839 15.0668 11.0668 15.0668H13.2001C13.483 15.0668 13.7543 15.1791 13.9543 15.3792C14.1544 15.5792 14.2668 15.8505 14.2668 16.1334V19.3334C14.2668 19.6163 14.3791 19.8876 14.5792 20.0877C14.7792 20.2877 15.0505 20.4001 15.3334 20.4001H19.6001C19.883 20.4001 20.1543 20.2877 20.3543 20.0877C20.5544 19.8876 20.6668 19.6163 20.6668 19.3334Z'
            fill={color}
          />
        )}
        {icon === 'information' && (
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M22.6665 11.9991C22.6665 17.8899 17.8906 22.6658 11.9998 22.6658C6.10905 22.6658 1.33317 17.8899 1.33317 11.9991C1.33317 6.10831 6.10905 1.33244 11.9998 1.33244C17.8906 1.33244 22.6665 6.10832 22.6665 11.9991ZM11.9998 21.3324C17.1542 21.3324 21.3332 17.1535 21.3332 11.9991C21.3332 6.8447 17.1542 2.66577 11.9998 2.66577C6.84543 2.66577 2.66651 6.84469 2.66651 11.9991C2.66651 17.1535 6.84543 21.3324 11.9998 21.3324ZM10.8448 16.2999L10.8448 11.7217C10.8448 11.0842 11.362 10.5663 12.0003 10.5663C12.6385 10.5663 13.1557 11.0842 13.1557 11.7217L13.1557 16.2999C13.1557 16.9382 12.6385 17.4554 12.0003 17.4554C11.362 17.4554 10.8448 16.9382 10.8448 16.2999ZM12 9.30526C11.4382 9.30526 10.932 8.96698 10.7171 8.44822C10.5015 7.92946 10.6203 7.33182 11.0179 6.93494C11.4148 6.53728 12.0125 6.41854 12.5312 6.63338C13.0507 6.84822 13.389 7.35526 13.389 7.91698C13.389 8.28494 13.2421 8.63808 12.982 8.89902C12.7218 9.15918 12.3679 9.30526 11.9999 9.30526L12 9.30526Z'
            fill={color}
          />
        )}
        {icon === 'link-plus' && (
          <path
            d='M8 11H16V13H8V11ZM20.1 12H22C22 9.24 19.76 7 17 7H13V8.9H17C18.71 8.9 20.1 10.29 20.1 12ZM3.9 12C3.9 10.29 5.29 8.9 7 8.9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15.1H7C5.29 15.1 3.9 13.71 3.9 12ZM19 12H17V15H14V17H17V20H19V17H22V15H19V12Z'
            fill={color}
          />
        )}
        {icon === 'maintenance' && (
          <>
            <g clip-path='url(#clip0_5795_9190)'>
              <path
                d='M1.212 0L0 1.212L2.13508 4.90431L3.51969 4.70123L11.9714 13.1538L11.2505 13.8462C10.8812 14.2154 10.8812 14.7748 11.2505 15.144L11.6252 15.5197C11.9945 15.8889 12.5594 15.8889 12.8363 15.5197L13.9329 16.6154C13.8406 17.1692 13.9329 17.8274 14.3945 18.2889L19.3846 23.2505C20.4 24.2658 22.0615 24.2658 23.0769 23.2505C24.2769 22.1428 24.2658 20.4868 23.2505 19.4714L18.2889 14.4803C17.8274 14.0188 17.1692 13.8342 16.6154 14.0188L15.4034 12.9231C15.6803 12.5538 15.6803 11.9889 15.4034 11.7111L15.0572 11.3658C14.9733 11.2783 14.8726 11.2087 14.7611 11.1611C14.6495 11.1136 14.5295 11.0891 14.4083 11.0891C14.2871 11.0891 14.1671 11.1136 14.0556 11.1611C13.944 11.2087 13.8433 11.2783 13.7594 11.3658L13.1538 11.9714L4.70215 3.51969L4.90338 2.13508L1.212 0ZM19.212 0.0286154C17.3908 -0.122769 14.976 1.08462 13.8462 2.13415C12.456 3.52431 12.6831 5.34185 13.788 7.09662L11.8274 9.05815L13.212 10.6154C13.9505 9.96923 15.0397 9.96923 15.7782 10.6154L16.1538 10.9902L16.2406 11.0769L17.0483 10.2692C18.7172 11.2505 20.4545 11.3917 21.7791 10.0671C23.0714 8.86708 24.4726 5.90769 23.8265 4.15385L21.2308 6.83631C20.8615 7.20554 20.3022 7.20554 19.9329 6.83631L17.2495 4.15385C17.162 4.06993 17.0924 3.96919 17.0448 3.85767C16.9973 3.74615 16.9727 3.62616 16.9727 3.50492C16.9727 3.38368 16.9973 3.2637 17.0448 3.15218C17.0924 3.04066 17.162 2.93991 17.2495 2.856L19.9338 0.173538C19.7031 0.0923077 19.4723 0.0507692 19.212 0.0286154ZM9.05815 11.5385L5.71108 14.8846C5.35141 14.8047 4.98381 14.766 4.61538 14.7692C2.03077 14.7692 0 16.8 0 19.3846C0 21.9692 2.03077 24 4.61538 24C7.2 24 9.23077 21.9692 9.23077 19.3846C9.23077 18.9111 9.156 18.456 9.02861 18.0286L10.9902 16.0671L10.7022 15.6923C9.96369 14.9538 9.96923 13.8351 10.6154 13.0957L9.05815 11.5385ZM16.212 15.7505C16.3274 15.7505 16.4363 15.7726 16.5286 15.8658L21.9812 21.3175C22.1658 21.5022 22.1658 21.7957 21.9812 21.9803C21.7966 22.1649 21.5012 22.1649 21.3166 21.9803L15.8658 16.5286C15.6812 16.344 15.6812 16.0505 15.8658 15.8658C15.9582 15.7735 16.0966 15.7505 16.212 15.7505ZM5.25046 16.9892L7.00985 18.7495L6.37477 21.1431L3.98123 21.7782L2.22092 20.0178L2.856 17.6243L5.25046 16.9892Z'
                fill={color}
              />
            </g>
            <defs>
              <linearGradient
                id='paint0_linear_5795_9190'
                x1='11.9978'
                y1='4.84858'
                x2='11.9978'
                y2='24.012'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-color={color} />
                <stop offset='1' stop-color={color} />
              </linearGradient>
              <clipPath id='clip0_5795_9190'>
                <rect width='24' height='24' fill={color} />
              </clipPath>
            </defs>
          </>
        )}
        {icon === 'notification' && (
          <path
            d='M12 22C12.6193 22.0008 13.2235 21.8086 13.7285 21.4502C14.2335 21.0917 14.6143 20.5849 14.818 20H9.182C9.38566 20.5849 9.76648 21.0917 10.2715 21.4502C10.7765 21.8086 11.3807 22.0008 12 22ZM19 14.586V10C19 6.783 16.815 4.073 13.855 3.258C13.562 2.52 12.846 2 12 2C11.154 2 10.438 2.52 10.145 3.258C7.185 4.074 5 6.783 5 10V14.586L3.293 16.293C3.19996 16.3857 3.12617 16.4959 3.07589 16.6172C3.0256 16.7386 2.99981 16.8687 3 17V18C3 18.2652 3.10536 18.5196 3.29289 18.7071C3.48043 18.8946 3.73478 19 4 19H20C20.2652 19 20.5196 18.8946 20.7071 18.7071C20.8946 18.5196 21 18.2652 21 18V17C21.0002 16.8687 20.9744 16.7386 20.9241 16.6172C20.8738 16.4959 20.8 16.3857 20.707 16.293L19 14.586Z'
            fill={color}
          />
        )}
        {icon === 'phone' && (
          <>
            <g clipPath='url(#clip0_5738_345)'>
              <path
                d='M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42H21Z'
                fill={color}
              />
            </g>
            <defs>
              <clipPath id='clip0_5738_345'>
                <rect width='24' height='24' fill={color} />
              </clipPath>
            </defs>
          </>
        )}
        {icon === 'question-circle' && (
          <path
            d='M11.8753 2.50135C6.62931 2.57135 2.4333 6.88135 2.5033 12.1284C2.5733 17.3724 6.88331 21.5694 12.1293 21.4999C17.3743 21.4289 21.5713 17.1189 21.5013 11.8729C21.4313 6.62785 17.1213 2.43135 11.8753 2.50135ZM11.8473 17.7834L11.7948 17.7824C10.9868 17.7584 10.4173 17.1634 10.4398 16.3674C10.4628 15.5849 11.0463 15.0174 11.8273 15.0174H11.8743C12.7048 15.0424 13.2678 15.6314 13.2443 16.4504C13.2213 17.2354 12.6473 17.7834 11.8473 17.7834ZM15.2458 11.0384C15.0558 11.3084 14.6378 11.6434 14.1113 12.0534L13.5313 12.4534C13.2133 12.7014 13.0213 12.9339 12.9493 13.1634C12.8923 13.3434 12.8643 13.3909 12.8593 13.7579V13.8509H10.6453L10.6518 13.6634C10.6788 12.8934 10.6978 12.4409 11.0168 12.0664C11.5173 11.4789 12.6218 10.7679 12.6688 10.7374C12.8268 10.6184 12.9603 10.4824 13.0598 10.3374C13.2918 10.0174 13.3948 9.76535 13.3948 9.51735C13.3948 9.17335 13.2928 8.85535 13.0908 8.57235C12.8973 8.29935 12.5288 8.16085 11.9958 8.16085C11.4673 8.16085 11.1058 8.32835 10.8888 8.67235C10.6663 9.02635 10.5538 9.39785 10.5538 9.77735V9.87185H8.27231L8.2763 9.77335C8.3348 8.37535 8.8338 7.36835 9.7588 6.78135C10.3398 6.40735 11.0623 6.21785 11.9058 6.21785C13.0098 6.21785 13.9418 6.48585 14.6758 7.01535C15.4193 7.55135 15.7963 8.35435 15.7963 9.40185C15.7963 9.98785 15.6113 10.5379 15.2463 11.0384H15.2458Z'
            fill={color}
          />
        )}
        {icon === 'search' && (
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M17 10.5C17 14.0899 14.0899 17 10.5 17C6.91015 17 4 14.0899 4 10.5C4 6.91015 6.91015 4 10.5 4C14.0899 4 17 6.91015 17 10.5ZM15.7618 17.176C14.3145 18.3183 12.4869 19 10.5 19C5.80558 19 2 15.1944 2 10.5C2 5.80558 5.80558 2 10.5 2C15.1944 2 19 5.80558 19 10.5C19 12.4869 18.3183 14.3145 17.176 15.7618L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L15.7618 17.176Z'
            fill={color}
          />
        )}
        {icon === 'user-group' && (
          <>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.25 6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75C15.75 7.74456 15.3549 8.69839 14.6517 9.40165C13.9484 10.1049 12.9946 10.5 12 10.5C11.0054 10.5 10.0516 10.1049 9.34835 9.40165C8.64509 8.69839 8.25 7.74456 8.25 6.75ZM15.75 9.75C15.75 8.95435 16.0661 8.19129 16.6287 7.62868C17.1913 7.06607 17.9544 6.75 18.75 6.75C19.5456 6.75 20.3087 7.06607 20.8713 7.62868C21.4339 8.19129 21.75 8.95435 21.75 9.75C21.75 10.5456 21.4339 11.3087 20.8713 11.8713C20.3087 12.4339 19.5456 12.75 18.75 12.75C17.9544 12.75 17.1913 12.4339 16.6287 11.8713C16.0661 11.3087 15.75 10.5456 15.75 9.75ZM2.25 9.75C2.25 8.95435 2.56607 8.19129 3.12868 7.62868C3.69129 7.06607 4.45435 6.75 5.25 6.75C6.04565 6.75 6.80871 7.06607 7.37132 7.62868C7.93393 8.19129 8.25 8.95435 8.25 9.75C8.25 10.5456 7.93393 11.3087 7.37132 11.8713C6.80871 12.4339 6.04565 12.75 5.25 12.75C4.45435 12.75 3.69129 12.4339 3.12868 11.8713C2.56607 11.3087 2.25 10.5456 2.25 9.75ZM6.31 15.117C6.91995 14.161 7.76108 13.3743 8.75562 12.8294C9.75016 12.2846 10.866 11.9994 12 12C12.9498 11.9991 13.8891 12.1989 14.7564 12.5862C15.6237 12.9734 16.3994 13.5395 17.0327 14.2474C17.6661 14.9552 18.1428 15.7888 18.4317 16.6936C18.7205 17.5985 18.815 18.5541 18.709 19.498C18.696 19.6153 18.6556 19.7278 18.591 19.8265C18.5263 19.9252 18.4393 20.0073 18.337 20.066C16.4086 21.1725 14.2233 21.7532 12 21.75C9.77662 21.7535 7.59133 21.1728 5.663 20.066C5.56069 20.0073 5.47368 19.9252 5.40904 19.8265C5.34441 19.7278 5.30396 19.6153 5.291 19.498C5.12305 17.9646 5.48246 16.4198 6.31 15.118V15.117Z'
              fill={color}
            />
            <path
              d='M5.08208 14.2539C4.09584 15.7763 3.63633 17.5802 3.77408 19.3889C3.17359 19.2979 2.58299 19.1505 2.01008 18.9489L1.89508 18.9089C1.79248 18.8725 1.70263 18.8071 1.63643 18.7207C1.57023 18.6342 1.53051 18.5305 1.52208 18.4219L1.51208 18.3009C1.47169 17.7989 1.53284 17.2938 1.69188 16.816C1.85093 16.3381 2.10462 15.8971 2.4378 15.5194C2.77099 15.1417 3.17685 14.835 3.63116 14.6176C4.08547 14.4001 4.57893 14.2765 5.08208 14.2539ZM20.2261 19.3889C20.3638 17.5802 19.9043 15.7763 18.9181 14.2539C19.4212 14.2765 19.9147 14.4001 20.369 14.6176C20.8233 14.835 21.2292 15.1417 21.5624 15.5194C21.8955 15.8971 22.1492 16.3381 22.3083 16.816C22.4673 17.2938 22.5285 17.7989 22.4881 18.3009L22.4781 18.4219C22.4695 18.5303 22.4297 18.6338 22.3635 18.7201C22.2973 18.8063 22.2075 18.8716 22.1051 18.9079L21.9901 18.9479C21.4231 19.1479 20.8341 19.2969 20.2261 19.3889Z'
              fill={color}
            />
          </>
        )}
      </svg>
    </div>
  );
};

export default Icon;
