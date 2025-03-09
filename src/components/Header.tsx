"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export interface Props {
    type: string;
}

export default function Header(props: Props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    let type = props.type;

    return (
        <header
            id={type === "animated" ? "fixed-header" : "header"}
            className={
                "z-50 w-full bg-white/50 bg-[url('/diagonal-stripes.svg')] bg-repeat-x backdrop-blur-md" +
                " " +
                (type === "animated" || type === "normal" ? "fixed top-0" : "") +
                " " +
                (type === "absolute" ? "absolute top-0" : "") +
                " " +
                (type === "static" ? "dark:bg-black/50" : "dark:bg-gray-900/50")
            }
            data-speed={type === "static" ? "1" : "1"}
        >
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-16">
                <a href="/" className="-m-1.5 p-1.5">
                    <img src="/riicc-onlight.svg" className="block h-10 w-auto dark:hidden" />
                    <img src="/riicc-ondark.svg" className="hidden h-10 w-auto dark:block" />
                </a>
                <div className="flex sm:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-sm p-2.5 text-gray-700 dark:text-gray-300"
                    >
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="font-display hidden sm:flex sm:gap-x-12">
                    <a href="/about" className="text-md/6 font-medium text-gray-900 dark:text-white">
                        About
                    </a>
                    <a href="/activities" className="text-md/6 font-medium text-gray-900 dark:text-white">
                        Activities
                    </a>
                    <a href="/updates" className="text-md/6 font-medium text-gray-900 dark:text-white">
                        Updates
                    </a>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="sm:hidden">
                <div className="fixed inset-0 z-60" />
                <DialogPanel className="fixed inset-y-0 right-0 z-60 w-full overflow-y-auto bg-white px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <a href="https://riicc.xyz/" className="-m-1.5 p-1.5">
                            <img src="/riicc-onlight.svg" className="block h-10 w-auto dark:hidden" />
                            <img src="/riicc-ondark.svg" className="hidden h-10 w-auto dark:block" />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-sm p-2.5 text-gray-700 dark:text-gray-300"
                        >
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="font-display space-y-2 py-6">
                                <a
                                    href="/about"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-900"
                                >
                                    About
                                </a>
                                <a
                                    href="/activities"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-900"
                                >
                                    Activities
                                </a>
                                <a
                                    href="/updates"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-900"
                                >
                                    Updates
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
