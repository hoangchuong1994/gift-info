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
                <div className="notititle">Chào Su </div>
                <div className="notibody font-mono text-sm text-white overflow-auto">
                Chào em! Anh tên là Chương. Mấy lần được gặp em, anh cảm thấy rất ấn tượng và có cảm tình với em. Anh thật lòng muốn được làm quen và hy vọng rằng em sẽ không thấy phiền. Nếu em đồng ý, anh rất mong có cơ hội được tìm hiểu thêm về em. Chúc em một ngày thật vui vẻ!
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
