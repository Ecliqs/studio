'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

const formSchema = z.object({
  first_name: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
  city: z.string().optional(),
  gender: z.enum(['Male', 'Female', 'Other'], { required_error: 'Gender is required.' }),
  age: z.string().min(1, { message: 'Age is required.' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  problem: z.string().min(5, { message: 'Address must be at least 5 characters.' }),
  occupation: z.string().optional(),
  marital_status: z.enum(['Single', 'Married', 'Divorced', 'Widowed', 'Other'], { required_error: 'Marital status is required.' }),
});

export function Appointment() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
  first_name: '',
  city: '',
  gender: 'Male',
  age: '',
  phone: '',
  email: '',
  problem: '',
  occupation: '',
  marital_status: 'Single',
},

  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const response = await fetch('https://holisticmindclinic.com/landing-page/form1-api.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Form submitted successfully!',
          description: 'Patient record has been saved.',
        });
        form.reset();
      } else {
        toast({
          title: 'Error',
          description: data.message || 'Something went wrong. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Network Error',
        description: 'Unable to reach the server. Please check your connection.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="appointment" className="py-12 sm:py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl md:text-4xl">
                Register Patient Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                    <div className="grid grid-cols-2 gap-4">
                    {/* First Name */}
                    <FormField
                      control={form.control}
                      name="first_name"
                      render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                        <Input placeholder="Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                      )}
                    />
                    {/* Age */}
                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                        <Input type="text" placeholder="e.g. 28" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                      )}
                    />
                    
                    </div>

                    
                   {/* Last Name */}
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                        <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                      )}
                    />

                    
                 

                    <div className="grid grid-cols-2 gap-4">
                    {/* Phone */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                        <Input type="tel" placeholder="9876543210" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                      )}
                    />

                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                      )}
                    />
                    </div>

                  {/* Address */}
                  <FormField
                    control={form.control}
                    name="problem"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Problem</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Describe your problems" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                    <div className="grid grid-cols-2 gap-4">
                    {/* Occupation */}
                    <FormField
                      control={form.control}
                      name="occupation"
                      render={({ field }) => (
                      <FormItem>
                        <FormLabel>Occupation</FormLabel>
                        <FormControl>
                        <Input placeholder="Occupation" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                      )}
                    />

                    {/* Marital Status */}
                    <FormField
                      control={form.control}
                      name="marital_status" 
                      render={({ field }) => (
                      <FormItem>
                        <FormLabel>Marital Status</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Single">Single</SelectItem>
                          <SelectItem value="Married">Married</SelectItem>
                          <SelectItem value="Divorced">Divorced</SelectItem>
                          <SelectItem value="Widowed">Widowed</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                      )}
                    />
                    </div>

                  <div className="text-center">
                    <Button type="submit" size="lg" disabled={loading}>
                      {loading ? 'Submitting...' : 'Submit'}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
