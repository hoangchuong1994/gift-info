'use client';
import ToggleWife from '@/components/toggle-wife';
import Info from '@/components/info';
import React, { useState } from 'react';
import ButtonPrimary from '@/components/button-primary';
import Description from '@/components/description';

const HomePage = () => {
    const [wife, setWife] = useState(false);
    const [bypassPhone, setByPassPhone] = useState(false);
    const [showFormInfo, setShowFormInfo] = useState(false);
    const [showUpdateInfo, setShowUpdateInfo] = useState(false);
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        if (!bypassPhone) {
            if(title === "chuong") {
                setShowUpdateInfo(true)
            }else {
                setError('Mật Khẩu Chưa Chính Xác. Vui Lòng Thử lại !');
            }
        } else {
            setShowFormInfo(true);
        }
    };
    return (
        <div className="h-svh w-full">
             {wife ? (
                <div className="relative h-full w-full p-10">
                    {showFormInfo ? (
                       <Info />
                    ) : (
                        <div>
                            {!showUpdateInfo ? (
                                <div className="card-style-wife h-full w-full rounded-lg">
                                <div className="flex flex-1 flex-col items-center justify-center">
                                    <div className="form__group field">
                                        <input
                                            type="password"
                                            className="form__field"
                                            placeholder="Wife Password"
                                            onChange={(e) => {setTitle(e.target.value)}}
                                        />
                                        <label
                                            htmlFor="name"
                                            className="form__label"
                                        >
                                            Nhập Mật Khẩu Wife :
                                        </label>
                                    </div>

                                    <span className="my-2 block text-sm text-red-400">
                                        {error}
                                    </span>

                                    <button
                                        className="group relative overflow-hidden rounded-md border border-b-4 border-gray-400 bg-gray-950 px-4 py-2 font-medium text-gray-400 outline-none duration-300 hover:border-b hover:border-t-4 hover:brightness-150 active:opacity-75"
                                        onClick={handleSubmit}
                                    >
                                        <span className="absolute -top-[150%] left-0 inline-flex h-[5px] w-80 rounded-md bg-gray-400 opacity-50 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] shadow-gray-400 duration-500 group-hover:top-[150%]"></span>
                                        CONNECT
                                    </button>
                                </div>
                            </div>
                            ) : <Description />}
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex h-[inherit] flex-col items-center justify-between py-10">
                    <div className="brutalist-card">
                        <div className="brutalist-card__header">
                            <div className="brutalist-card__icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                                </svg>
                            </div>
                            <div className="brutalist-card__alert font-serif">
                                Wife Không Khả Dụng
                            </div>
                        </div>
                        <div className="brutalist-card__message capitalize">
                            Vui lòng nhập mật khẩu wife để tiếp tục =)))
                        </div>
                        <div className="brutalist-card__actions">
                            <button
                                className="brutalist-card__button brutalist-card__button--mark"
                                onClick={() => setWife(true)}
                            >
                                Okay
                            </button>
                            <a
                                className="brutalist-card__button brutalist-card__button--read"
                                href="#"
                            >
                                Can Sồ Lu
                            </a>
                        </div>
                    </div>
                    <ToggleWife
                        bypassPhone={bypassPhone}
                        setBypassPhone={setByPassPhone}
                    />
                </div>
            )}
        </div>
    );
};

export default HomePage;
