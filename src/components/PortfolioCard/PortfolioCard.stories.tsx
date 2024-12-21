import PortfolioCard from './PortfolioCard.tsx';
import { type PortfolioCardProps } from './types.ts';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<PortfolioCardProps> = {
  component: PortfolioCard,
} as Meta;

export default meta;

type Story = StoryObj<PortfolioCardProps>;

export const Primary: Story = {
  args: {
    title: 'My Project',
    description: 'This is a description of my project',
    imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVcAAACTCAMAAAAN4ao8AAABU1BMVEU9R1L2jSB7iZj///86RE81QEx+jJv9kBx6iJctOUb2hgA3RVMpNkPU1tj6jx43Qk66vcAXKDhTXmpVXWavsraIjZMlMkD39/huWEgoQlTq6+yRlpseLTykp6zKzM4xPEldaXbcgyn7zKZxf4396ddudXxCTFestL6NY0HVgCxJVGD1gQD//fSmbTqCX0R0iZzi4+R4W0d9hIu5dTXHi1mYioH6vo5HS09seYeanqP9485YZHFpcHjriSPExsn3mTrDeTL4pVqOmqf5t3+baT29djT+8uf3lzf4rm383cNiVEr5tn33n0oXNEj6yJ/NfC9STk26i2evcDkAGi6JYULngACSWyf81LLeyrrRysQKPFdKREKlnpqNh4a4pZdgRC/VjEp6aVxtZmOif2PekEnai0Do39fem2LUs5fSdgOrd0q7mHxaSkG4e0PjqHUADCWgXAl7KwQAAAAcwklEQVR4nO2d+WPaSLLHwd1C6BZGSJFACFsgEmFnFLKLwcbExg6+7UxmMp6dY2dnj9nz7dv//6dXrRuQj8l4YryPbxzLFkKgD6Xqqq7udi631FJLLbXUUksttdRSSy211FJLLbXUUtjXY7+L/zpJq/1i0W44S7Kz4nQQ95FPxv3CCqhQWF2CnRKnv9xbW9t7qX/Us0OshOwSbFrc1hotgugXWx9hsng1wrqyUlxyTYnbFfO+xN2P4WrHWJcGm5b+ms6Hot9/hCsoprg2llwT5ROJH2GwcPvb/r/iSqG/5BqJe0YnXOlnPxssBpz1ttAW5HZxaa+JuJd0XmRpFr7EPP1qhuvdnHB/pYCQAf8Eu+BOP8T/gvcl/YLnLoK4U1rc7x0cHJz19kX6dJorbjh3PR/igaLWtot9Y1S0pz4GytWYiA6nb73buneETFHYbeVy1pO2fi7P9pCvAzo/3W5JX6Ahk/GUqZwV27ZXB++KzJWd9H6pKyO5FezRv1zLi/m15/dpFiWLGgh8C2HJGOInjFZ/S+8jEr+ic/r11IVLXbi9TWruGbjRSN3w2C3WPbtYQIUZcx14yKv4Bqtf0SSUE+mruy1W6ipqF0k7gjREkjUqP1mw3Ds6j/ZFcR+x9Lup68Y7A6S0ph0dhn+S30DFRis12sguwv8Zn2G5SPU/FPjkonZx7y6LZaguKmNH1y90zrGqyKGsX3R1jyj9LbvRY9nehH09c9W45u1Mmyt2V1adxsqK7eJ+1PhjZ4zGhbrRn2tqAqsGD37vgMOpl60Wp59uvt17ffhOd4ZMV36yYLkP29cse33yYf6a+RlWuAhZK0lcC8W4n4WqBu4ZzXENnetrMQmQ395qsDgneLz+ao2EJyJNX53qElKerI/lvrpsdjrN3lf3aK+dJLuKkgDsVlCL6Ibr11+kuK7dxhWXeckFr8GerzfPROKQD/Uyw7hPFCwjBPYmZLX908IOsdeiTb5Hrf/N9hqIcGUD3cUV1SV9j86foMn1vv9hAFjX8O5+XwsgaHEahEliBHhH9oZgb8O77cLpF1YKDUkinVg2FR3vEGsdpl/DAkWP6m9Fcft6Av+2RfHWhksaKvohvbsxOWfZ0MYhopbdp5AjOP2cY5NEPsk5eS+017vyI9wvEJ5wmRLpdC2GngCXZ56Ny5qGUBRJcF/S7GQDsG5MWPrLW30Nb22J7KTJTjkOS30ClQhsF/ymp5hO5p3ysNEYlu/OrfwubMIVTJ6cJPKwKii8WS3YSi3U7aIKRTIn2KXn2ZPrDtu5PmHzt2CFZ9UvNiFJSXVYkAiC0dAvuuRPI8dvzUkndILRMonBVeczAF8pY3Fc0tvqYoyLcILGzrwdqXKdkdQWqtWMgYr5ahcw65vs5YTNs5NLdnPeDUix98TDlr5GjkpzFd/rlSeQHBDPWOg3AIudzkYdUObxOOe6bnKkXx0oNhqAt9CnMrAqSPN2ZKSpvKCZloIQAcvtHiPgio4zOs7x0IvOY0EakafRuTjF9YXOqAvvYJ2+HQApQvOzmuy/sU7dXykUCsXYMLHrm7v/LSP8sWQ0pEj6WsZU2SQ+doC6FOmLREfsERLDrABLiSjH8IImDp7c2hLfTPJTEncvFN+lLLLA3Ap+tUTqE2cwDwZPX4BTDIpXSYd1CJV8L86fn6lrOUpq8RR2GlZNNctWyTAgX+KO0eV+Dx2HWMutlIYtzfPPLrWq5VxeZP0vkXyR9gsarmF14R2BswP22vDtdcWe793Hrpl2p0ntKgJLQjTiRIr9RsHOOD/jeRhLQYgwcnmJkRGYNflNA6GAD2WiGQWdO1SN0tcA6HGP3d9nj8/Za3AJkKE9AT8Q+VebFE8zjGCIyskveCcptUZd1tjFklsAH4CJF6EYnoGv5LKpFhrCbxQvOS0PDZkWahFkTgUplUqlGvnwtCOwdpDsh2jgaUcXb8W42xIEXOnnvFG/M1J5dPkNj38rz3eT5Eg7gwaxK5gqtaZKLJDLOqRFk/hu3UDIGHXDbgSJKnkjYMR0YbeQk5FjQePlx7OeZxiGlnE/S0Mkq8HLlUddi1Qv9tFB/qgnnl8i4l+3qKq8+PaKiwU/CS1mF6Wn7TVVal2ZdxpMy0D1Qas7EJDhd3873aqCgD8F1jlsCSjnjWqmYVEWBLjVwWBQVTNeEbtKlFBgRnW5XUCJjkSRzpMetrx4pbvqU+jRchuSCzlBbjXuNkk9CBeZym2AazGstWaUWvkBkh2e0nWLd0aoyuSkBsRYdYqk+QNVkmqC0EIU8awen7MEz/OEzFYdp6gJmr4JQNEZSQ3Yk20W0oJVpCx4NBAI7l+b+MeQE9OimJwVvfP0RfolQQ2iJs3w5kutVhV1VS6n770g/bRVVLGAK68G2RaxQNhQqCy5DVOD+5zhef7O7hNKHloWAG2uk9SAbMQXF1Y3o2SxmErlAOoINQRVrmSWsXYKNjLanqx5s6VW0sRX1XfPdD1Pb+lbW+oAuVQDSYSd1EW1nO84mTJ8ULUWUu/7xiyrqzyn2fVtnys6Ful3o7L1VLCmBHFQC43CtGheBdsY2fZUqTVMO3lBqG3tiu93xfzu4drulurV1Qbc8wKTww5qWSSjNXiMHVMR7s8Vu0i5uGLPNoCreISO6E1dMJ5EL+G0oIVpIVlBw0EmWNwoCp69UkTtlaiRs1ojQgkADCXuCpoX0rMv7m5BgEXlysMqCVfJh8UwfqYFLyCMzPu3O1LDym2J534gALnvmo7xwucEWbIgyjHR0FJN8JYZ0Yzd1kipdRwFZVJX1qou6csGp6kf0uxxs3nM0od6joFkE0uqH1fxMgk+iW9RPbnE/JzmHCBeXHXQPst2LpsdOO89hoYsoBiDWCtceElBoxbPzFwEdsfItk0Up1aWrCEDLMiSBf7ds10INa+v0T69pnO8oBCipl81YHKtFkP598O9iigUtGpRP7hlfn2NmtfX15PJ9e8WvWPgJmEcYAW7HQlIkxv8VJUOQnVUlz2tHe9RK1oJjmBGkBrRInty0umcnLCi+PqiLkOoVSZlPuwnVORo4Nq9h7VSA4jCzHDoECQngiyPRiPy7alyhbZ7AJyIO1B5p+ohw3TVpP9PgtDfI0oCCMf3d2CvF4drwHW702lesyL9+oLYq6PVVarsBmaPGUyB/d6jumMpmqloWtkHC59NtbwTqLEwJcOfOYwBUwZE90yQSwIG1wSQAycOZ3cUpJig9FP8l6lqPPfNmvgGTSaQHb3QOeJfc9gz8BAh0yUpVmOEuqUhUu5+R5Yi1CxVMPzEizFSHTKLMngAgvG7lYqzKc0zPa0VpegQbvJlJSlN4ZZXF4hmOz4gfC1jfVMUjy4vj0T6JQdWBvc/ZgQNKRUDVa0cQoKCZKTcY1AhcOX9EIN8ZriGWqVaqAXBCmHlyC3fpSRVJWbH1IwYq38KcA1xzCXxMsiszb+QYTKntAguFpyAuMYxikcAYksY8FTJU/gycnk4lTIdu+LMHhSfa47XuuQDZ8DPG5EWJdXi4YqcnIRvVXK4anq1nFrX+GQfQzxuykygARllXJ010FTu6u2zF2L+6uXuFUdF5TGSHTF1WW0hOAlVnn4mU8/0CgFXJuAqVaqVUNXBTWM9PrWAa0lrp/uhkskqkaKevx2Kr2qoVQOH2I0vn6+gKm+m3BoDymIhwb3Ocdw7evcbbouDLCCVV1gkftXIDkxMXo3EMILMqPMqmSmuOUoyQ1Vn475HE+FqZHIttoWxXK/XhXH0qAuNvUm67pV6XPsnWFXJu0cPkjVAJCTb2nzOkWEwxKMmcsDbhE050xK0SEJJkHktQyjNNecYXqD6gniBG7mCldptb1wnb9b0Hy3aY49EAky5W4Z7NsxqmIpvu/fKkBijTj4NjtSsorY8VuxuGBONqpG6KthrNUP1Ka45PtTi9Axkcy2a7UKb3Fg2qOhTLQhIKBO3iiFaZbTAOYJvrcgCcz+uEAFEHCD8vyGLxw3Ij6lIDNhriaHmpCrTXBdP2VxtTxuTwh0K3au9UkfGOBn2xMgeabbBWqtfQIJK1ZX7FD54WagFXGqecoNpWcGZw5epaAgZw4xG8Baujgt69PrWzX4gkF0YF+2ijLS2nZoNAKZHuqEqyPyiRbpPlPp9DNYyEamuEKWKYjNy3FTyhkzHlTNM+xaueKcAevR5YTe3WwFeAdrptobapLKSGgXEG4oFWD0EUT0jYWvO+jguY8yxgeKG5+ahlKkX8eSaBLY9mjv2Nq6NQmZx7RPrdq6fjdD4MwHVfWcQcOV8MQOtBE6gtNN1eak7bVBkDv2709PTd9zMVHqcQ7gWRkp8dKYZpc9zgb7/1+npt6ZxEe2OjmKAK8dBXmAlT8LxgAXiuDJqcZ9UmVy//20k7XfwDX33faX4WcD13bNQyES//+HZs399iy8ELeVdOf30/ZpIE4lrr5+lyaqp1Fjj4zNNKTkP9/Jqo9eZbHeum69Pg9Nwp9Fhsgev/YP2W/+XUz9ws30HgqlgCGNgyDhjoN2nURbXz37D0oHY5nqHzaNzls7/4befwZvkNqNHtlGvc3xO073dtcNU157+jMyhj4ZKifTaq2RAoNRA50dviI5+dLnndJbeRed5uUuzl2gfbeyjY5p+8YycRr+KXn29CW+R3Tj23+iVDljJ9AUJ51b7wbU0/LF3/ULGoIdPomyuMZhjtH620eyQH9k/+FyjYdEHPZZFB/Afrjofw9Pf0uL0KLTUFC9I5JuhvDr/fGrUanT4ln8kx+2R87AnxLRJrZWchtRyw5MTrvB949if5bWn5xzfUTV2ivGSEQXbzdlkqM7jgL2da549nmycoH0fAb2mJ1zJWLN87yhPn52Tq34Z3O7c2jws+kXkCqjB73uhvqvqt3HNhefpNLcn153gNGtb3I1csR2NrUtpdgTeInHN0yzbuUb5YE7Eez3h6l8euargx60A67Sxhqe4iiyW+XH90tf6HxnuFq56dB4R7ZMxLMHPu3fZa6Yeacr47VwjL9sMro3e0hN7JQ1TjNFf4EF/n6AS4TGafIcNvalLGFM5ivp+O1TLIv41fFz0RfoQRXoLDovPQyqsR+hNBPnFN3Nc/XNc6Zhywy6iaBNjXUQ/IH7ua432fZw/iSfiKm4eHh5u7kXmmt/l0tME6Q8v/nqWPxDPzvePjw7oM7fVKlekAfencPoQ+9uW+3u2lz/ePz/L916c/fmvx385eHHwl+P9P1akanwe9vqnr77SetEwd/r5XvAZxFx7NJz8zV/7btUajM3xuF2E/Jts4l44+5ECgtu5rnzm63Nok/17/uqbuN3K6RA46lvRUi/0KadfRZDZr+rtFSGnic2zy5PzDXbjc1npGhZy/xYiYr+WW5MOOjrp9Zqipnu2OWpoX2iNkVnxLO0v0cv/XRvoF7KwR4e3wObLTaLD3YjrT//QNr1/fi0PNV4bC/W2UdTGntz2xqgQmGzWGPEF4NoNd3y49O9GcS3hGjQwcesDLddWjPXr9rBBUZh5yZLbmwU/jCnJwhZZEiI4+hnxAyxxASz9jKOwRGErZ8FRmOL+FXmB3VVIYaUuuiAfGJ1/v6UHWcE3LyKuXd3i4B882SkmsiH5HqOge9NexDgr5voHdps0H+KuPsM1vvfpLxPE/2N3KX8aXdzOhPFCiisXt1tg6VPplv4+etKrARkShFEXB1Sj96wnXON6ZSMKBYqrWMJOg7gDP/Zy5y75kyirXjDP9c8ivXHCAtdZe01IvYohniNSTME7bkJdDILYTK7i81eJtlLBwO6FJzOkAidfbL7PpeYbzXDFZDB3dAV2kLpKq/6AJhIOPFq7VRuN7Wn9JrrkbrgDfnyDemzav24R89J9CCJpib69+BC6wbUdKUdZNa3CM3roGcJZrplc8+l0i8x/iT7UPd0v81KkMDY1i2uaK17tB33EU/4UN1YKvsHarnvDjKhfnWtN5ad0Ec9Tp8gyhDpFLJE9QPvs+4uY60uwrpeHu2SG8PH1BG1o3vW+P52SRUNMVeUB8rrCRTQze/cWrimR/bGNb9qkkkjK2TMdhTNcG6lsIEkCnKIn+MPySbfhpwfLC548p39Hl7xHdBW0+ez1Ru+n9v9MWxlgPdhAaNJDAw02+3C19OdcTupqaCCgURwi7N7sX2e5vgr2s+xXcjBfnDEGPJPuELyZayoJkEgsG+1+DK7GqD6rmGsQsYe/sBua7KGj6cl9YhNdopPOHxCPJ5N1dM3mj36Cq6iZwv+WUenjubIn13/SKn5FpqZ4QyFd7r4fV1s27MfkqtSYGV28Fucvmcw6KfM14To9GVUUNybiyYR9vYMkTKPeOdpmxa+5HFXRkOIhQb+PHxATkf3BsmficZOMf6lWKgM4ERLS4wLmuMb9AunOgGKh/aj2Oj/wIY50psSeaaUco2ynubKTCXuOfnOqD5HEfThAbB5dd/5aoaiKWUHCsH6xG6K7pd0S917Henvqr8rj7+5cGopnaJohKKhbSrfqM/GAu9No9KMoKzoG76x4QQRLJkx+eq6MIJd4/qZ2K2WY9O6PcHlYiyZPg3OFdBKx7HXzXxwGrvoaCyHDOTo+GNVIPIAqDPMuYvf2Zq70qZ6IHBV9Zk2lRkZo8Hyp/vWrdP/4bPxKauSxwQYfAM4Vi8HAh77rPEbVgOqi6REPYCFab8717e691NUBMlAzwvry1SF9hPY7HXT89wu1jNSL/3TWm51OD3V+HOUkaMadXJJFPL8lL5hZcSiOX9H3cVV8g11Lkc3KC/oxWDIoSnLtseFnso+2Eqo1rKQ1QPAt7s8Ke0NJyQpsslWVzc+PjwIaW5z+93XUnEzQpOl5ZNTrT82J//vZX+rO0E9bvw2SWMhWtyBNpbC+SZPffT/KJFwtyF5JEosxyWbJhCyy+wx9CKNW/R/oXKTXXsJ78I9LceVzfg5MYbcQp7H9nUa/0C6MguEkj1bhktIDHqwyIv10MdeUKfHhYjnh+jRbOe6HjZPLy5ON3uWlqSDTNC8v0fVlr7nN/mescbJl/vHfZ+eX7PpR7/h4nFP0wU7/4M0le/nm4Pj8O0tJuFYqDVNSnGqrNXAVbH4fBgQn7BXnd+4c+ks3gCd6PjQpxa32CdcO5CIbFUUyy5VKGXYX2u2xvDIqyGNTHgsraBwEr49W4JqWVEYOTnFNPcQLZom/+E+4igJwhYD9iO2sb8MV7q0ixrp4Dz4BsgTE0ruHP/70qrl/ub7fZCdH173f13OTq+1/99bPm2zz/Lp3LFjen+IMWFa6P20Z5d9Vv6+XjZxQ9BPiDjqjxd3NV88O1+jAPPP0WxueVx6NgSt8wNtHGwNPElqK0vIsbyzIbW/FKAjttlDwCmHsWlyMibJUrYtKqXYrxRXXBLPGEK5syFXqkjUtwKzgtx/92RcfJj02/wb5nd5kGVOWJX5AZK8uGA42Ih3+TtPf4oskzvKXPPV3w7dnDPWO5Mb+1KGg95yEeKJfMJCYHIMtyOLOz47PthHqqjlGIj1nUt8fUkYW6/V7tOIIayEWmCUrLyJBEOK8IOSKKYZ3K+Fw8/VzlgwN3iJB6msR4nfWj20l0iw1gauIjmZiiV04BSdO7dFz2XUY0rvldz76C7zE8ifAxmvNQlRMYt3OdTzeK1liflYL4Qikiqwostye5opVpzLSkDaqtLqtf65P4A7sHbE+Vysfcj337VX1SN/+DFcxT+r7U1xJ1eYWrqSgM70aDrkryJyvQFG2IcZc3bBGOI00+L4IS6NTM/kW4YpdA2n1qqvyFgVNGtsR/X6WKiUNETQpZC0mwnULk4FCf2Pp4AZO2aa/9G6aa2DAt3AlMcHUajgQHLBfpvpfxdCKu9G0Bn+RBNu1k4psoRCMJCg+3hA4iWestC5eR2UoDA8wZdRyHDeYheD+4wiUz7+ZKKqlotbFh57fMp+jqwvL4lHjhw+99A0s0nu5IHRNclX6ioQZwFXMUBjN6t8hNv1J0OiPEVaMAz8gsgfJMllkHZo+POT2o7pWwyHT+7PWlPlUSg+QDrQRKRwcnSn/ATgU+Uci/1h/5zUbVVjp/N5piAOvhbraPA1zr7VMBQtLM/XRV7s0HZ3m6gcvSrcdx9H3/CN76G/JgDi843cNkDVP/Jtfwv7Yoke0VmaA6pUHVNd99/L926urq9eHr7hUkhQpGtvG6ZkKHrVQRdffPX//dm8PTpPTGdMLxnfzyWQtrZoe8h3NLgm4RtWXR3QCrfQA6YcQjpBlDNW8/5vCZDRRfBrcCOfN4p1GqDKTOYQ2WJ7u0ccV5xihfu/Z/p9MVHV2SUnVCHsK45WJbmjmMakPFH7l93cPMVo0VRfP9sOm9Su8MsZS8CVFP+H4J4uP94U3OH/fcMmfJ/srvN2fKT6cgpHD5WAGZqZGU8+51xS6u+S4Oy3X7a66reH0T6vkp4bbCH5y3dWfV6pekD9Fx4y8YNKlZWrKfKkrkILSq7y7xZt17ygcIqM2IitA2IZgw0+kp8Sok2Uh/H0jW9bIo2TA5cNf9CcQLiNFJfGrOvBKakllSjVLLfGwYYIN+a02zfWmpPHnZDd4tQgMV4wx+SMRpmcXgWa97XP1fK5tgRAuPlGs/kp2hm+TglcyhYor1Plgw8CmLAg1Raio81yL/tdK8ZdwRf5aW2CvpL8EGILIMiZk34h0nhB7TQ9coxxs3dwELEbXVSIqZ/pVWM+rVeWuK8tMsLGCjTqQu/Nc4fa0yQyksV38WK6FYOBEcVwINn7WObVvZZz+kxwSmVOrzBWPY3UXDWxgBLWBx6slBpdKOT7eSLCBncws1+IYCWRJQYjOx8WP5Rr1kYabqV/mh1nixhBVVfOmJkCWF2Uq94ws0yspxsA1PFUxqq7n8bApG15JNqrz9lpsC/VC25MLo/aNXG+9RdN/5vBGb532rZJGltFUS5lSU8vJL5iAa61rthzTtIINVTFbrmnysOHnuQYDt1LT6Oe5JgM+hvNgE66FKU1hnV6Sp86QZWIyddNS3wsg4MqHDkAt1cAu1Jq/yfYDhXrBFOR0sxXEWW7SNcYokVCrxlizf+Ak4trfmVL/BqzBwnGUqWRJXjjfmoj4gREyy0iryanaNyrV0WDODxQLGkIeqsdcbdtfWKGdulhT8IK1QTykGfXBjM1GXAs76cU6JDeZGZAZYFFWphYXK+GqtioNp1KhWun+KQt2ZvgBaLLtlajNKva9qDcxdXMiJVwtACnw8MxM44Rreh1p90ZrJZKsm7guMFvg+kUtcgDpJgF2ljLygmIyYI9Yr4CKfbsvwzkifaF1ef+CIasYycI9uOIk48jCSnUNqmreqAwnvgiiqjMjX6bW/UgvFpaRb5HVSUgDZRipRS1Ql/LvbbD2kWfczfV2rNhxkVITjBu1qEu94UrWih/hgiBpW8jgWhyPgxVWpj6MtIzqXVzvcgKaJvC5WnacRaaJLyhW8rdZbtTULeZW5riS9Z/9uMtJFg2qlYehGsOhO3vZc1zvwEq8gISpQWY8oCxwPHB/cWssy37+2Tzcmfg1vTj+/G09w/UO35ojoQB+ivHrzxCZr34PrrdqhuvdWANZs4NKA/1XYPXBPizXu5zA/xfpLz7/rJClj+N6X2v97xf3YyNT966ZpLkusSbifmF9K8V16QQeUKn+gTTWx35bT14J16UTeEgl/YRLJ/CQmq8XLLE+hOa4LrE+iGa5LrE+jGa4LrE+kKa5LrE+lKa4LrE+mNJcl1gfTimuS6wPqNS4jCXWB1TMdYn1QRX3DyyxPqhCrkusD6yA6xLrQyuc0rrE+sAiXJdYH15kHPwS68MLuC6x/grCq0usv4oeacHbpZZaaqmlllpqqaWWWmqpn6n/AyQh4FBCxwfgAAAAAElFTkSuQmCC',
    repositoryUrl: 'https://github.com/nhope123',
    websiteUrl: 'https://github.com/',
  },
};
