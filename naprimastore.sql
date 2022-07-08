-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 04, 2022 at 07:17 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `naprimastore`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` varchar(255) NOT NULL PRIMARY KEY,
  `username` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `pwd` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `payment_id` int(11) NOT NULL,
  `payment_gateway` varchar(255) NOT NULL,
  `payment_status` tinyint(1) NOT NULL DEFAULT 0,
  `payment_note` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_size` varchar(255) NOT NULL,
  `product_quantity` varchar(255) NOT NULL,
  `product_price` varchar(255) NOT NULL,
  `product_desc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_size`, `product_quantity`, `product_price`, `product_desc`) VALUES
(1, 'Scissors', '12inch', '24 cartoons', '$244.50', 'This product is a demo product'),
(2, 'Video Game', '2.5inches', '10', '2,000', 'the demo product'),
(3, 'Frigde', '42inches', '5', '$10,000', 'Medium sized Frigde'),
(4, 'iron', 'small', '3', '$5,00', 'small ironing gadget'),
(5, 'Fan', 'small', '2', '$400,00', 'small standing fan'),
(6, 'smart watch', 'normal', '10', '$2,500', 'android watch'),
(7, 'gas cylinder', '6kg', 'metal', '$4,000', '4kg cylinder made of metal'),
(8, 'rechargeable light', 'Big', '3', '$9,500', 'Big rechargeable light with long lasting battry');

-- --------------------------------------------------------

--
-- Table structure for table `realproduct`
--

CREATE TABLE `realproduct` (
  `product_id` int(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_size` varchar(255) NOT NULL,
  `product_quantity` varchar(255) NOT NULL,
  `product_price` varchar(255) NOT NULL,
  `product_desc` varchar(255) NOT NULL,
  `product_img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='This is a product table';

--
-- Dumping data for table `realproduct`
--

INSERT INTO `realproduct` (`product_id`, `product_name`, `product_size`, `product_quantity`, `product_price`, `product_desc`, `product_img`) VALUES
(1, 'Fridge', 'medium', '2', '3000', 'medium size fridge', 'frigde.png'),
(2, 'iron', 'normal', '5', '50000', 'eletric iron', 'iron.png'),
(3, 'Rechargeable fan', 'Big', '1', '7000', 'Rechargeable fan', 'fan.jpg'),
(4, 'smart watch', 'normal', '2', '80000', 'android smart watch', 'watch.jpg'),
(5, 'gas cylinder', '6kg', '3', '2500', 'metal gas cylinder', 'cylinder.jpg'),
(6, 'rechargeable light', 'Big', '4', '1200', 'Rechargeable light', 'rechargeableLight.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  `user_img` varchar(255) NOT NULL,
  `verify_email` tinyint(1) NOT NULL DEFAULT 0,
  `isblocked` tinyint(1) NOT NULL DEFAULT 0,
  `deleted` tinyint(1) NOT NULL DEFAULT 0,
  `timestamp` varchar(255) NOT NULL DEFAULT current_timestamp(),
  `product_id` varchar(255) NOT NULL,
  `note` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `username`, `email`, `phone`, `pwd`, `user_img`, `verify_email`, `isblocked`, `deleted`, `timestamp`, `product_id`, `note`) VALUES
(1, 'Cybergate', 'cybergate@gmail.com', '09089348634', '123456', 'image.png', 0, 0, 0, 'current_timestamp()', '1', 'this is a test');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`payment_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD UNIQUE KEY `product_img` (`product_id`);

--
-- Indexes for table `realproduct`
--
ALTER TABLE `realproduct`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `realproduct`
--
ALTER TABLE `realproduct`
  MODIFY `product_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
