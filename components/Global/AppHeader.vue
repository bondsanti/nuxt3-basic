<template>
    <div class="navbar bg-neutral text-neutral-content">
        <div class="flex-1">
            <a class="text-xl normal-case btn btn-ghost">daisyUI</a>
            <ul class="px-1 menu menu-horizontal">
                    <li><NuxtLink to="/">หน้าหลัก</NuxtLink></li>
                    <li><NuxtLink to="/about">เกี่ยวกับเรา</NuxtLink></li>
                    <li><NuxtLink to="/contract">ติดต่อเรา</NuxtLink></li>
                    <li tabindex="0">
                        <a>
                            Parent
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </a>
                        <ul class="p-2 bg-neutral text-neutral-content">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
        </div>
        <div class="flex-none gap-2">
            <div class="form-control">
                <input type="text" placeholder="Search" class="input input-bordered" />
            </div>
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </label>
                <ul tabindex="0"
                    class="p-2 mt-3 shadow menu menu-compact dropdown-content bg-neutral rounded-box w-52">
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .router-link-active{
        background-color: rgb(221, 221, 166);
        color: black;
    }
</style>