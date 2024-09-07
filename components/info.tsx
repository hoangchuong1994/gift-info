'use client';
import { useState, useTransition } from 'react';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { InfoGirl } from '@/schema/index';
import { GetInfo } from '@/action/get-info';

const Info = () => {
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof InfoGirl>>({
        resolver: zodResolver(InfoGirl),
        defaultValues: {
            fullName: '',
            phone: '',
        },
    });

    const onSubmit = (values: z.infer<typeof InfoGirl>) => {
        startTransition(() => {
            GetInfo(values)
                .then((data) => {
                    console.log(data);
                })
                .catch(() => {
                    console.error('error');
                });
        });
    };

    return (
        <div className="flex h-full flex-col space-y-4">
            <div className="notification flex-1">
                <div className="notiglow"></div>
                <div className="notiborderglow"></div>
                <div className="notititle">Hello Su</div>
                <div className="notibody font-serif text-lg text-white overflow-auto">
                    Được gặp em mấy lần nên anh có cảm tình với em và thật lòng rất muống làm quen. Su cho anh xin số của em đi, lúc nào rãnh anh qua rũ em đi chơi Su hấy 
                </div>
            </div>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-2"
                >
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        className="border border-gray-800"
                                        {...field}
                                        disabled={isPending}
                                        placeholder="Enter your name"
                                        type="text"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input
                                        className="border border-gray-800"
                                        {...field}
                                        disabled={isPending}
                                        placeholder="Enter your phone number"
                                        type="number"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="mt-8 flex flex-col space-y-2">
                        <button className="btn-yes" type="submit">
                            OK
                        </button>
                        <button className="btn-no" type="button">
                            XÊ RA
                        </button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default Info;
